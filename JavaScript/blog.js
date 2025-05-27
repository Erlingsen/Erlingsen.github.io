const postForm = document.getElementById("postForm");
const postsDiv = document.getElementById("posts");

postForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const content = document.getElementById("content").value.trim();
  const imageFile = document.getElementById("image").files[0];

  let imageUrl = "";
  if (imageFile) {
    const storageRef = storage.ref().child('images/' + Date.now() + '_' + imageFile.name);
    await storageRef.put(imageFile);
    imageUrl = await storageRef.getDownloadURL();
  }

  await db.collection("posts").add({
    username,
    content,
    imageUrl,
    replies: [],
    timestamp: Date.now()
  });

  postForm.reset();
});

db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
  postsDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const post = doc.data();
    const postId = doc.id;

    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
      <strong>${post.username}</strong><br>
      <p>${post.content}</p>
      ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image" />` : ""}
      <div id="replies-${postId}">
        ${post.replies.map(r => `
          <div class="reply"><strong>${r.username}</strong>: ${r.text}</div>
        `).join("")}
      </div>
      <form class="reply-form" data-id="${postId}">
        <input type="text" placeholder="Your name" required />
        <input type="text" placeholder="Reply..." required />
        <button type="submit">Reply</button>
      </form>
    `;
    postsDiv.appendChild(postEl);
  });
});

document.addEventListener("submit", async (e) => {
  if (!e.target.matches(".reply-form")) return;
  e.preventDefault();

  const postId = e.target.dataset.id;
  const [nameInput, replyInput] = e.target.querySelectorAll("input");
  const username = nameInput.value.trim();
  const text = replyInput.value.trim();

  if (!username || !text) return;

  const postRef = db.collection("posts").doc(postId);
  await postRef.update({
    replies: firebase.firestore.FieldValue.arrayUnion({ username, text })
  });

  e.target.reset();
});
