async function getQuote() {
    let quote;
    let author;

    // Map of authors to image URLs
    const authorImages = {
        "Walter White": "Bilder\walterandjesse.png",
        "Jesse Pinkman": "Bilder\walterandjesse.png",
        "Saul Goodman": "Bilder\saul.png",
        "Badger": "https://tse1.mm.bing.net/th/id/OIP.Q844a1jMFZU7ki2UZdbSxQHaHR?cb=iwc2&pid=ImgDet&w=474&h=465&rs=1",
        "Hank Schrader": "https://tse4.mm.bing.net/th/id/OIP.6Kl3ZO_IArZK535cta4XgAHaEG?cb=iwc2&rs=1&pid=ImgDetMain",
        "Mike Ehrmantraut": "https://ih1.redbubble.net/image.3607322372.0838/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
        "Uncle Jack": "https://farm4.staticflickr.com/3863/14394245826_5d2afcdb8e_b.jpg",
        "Skyler White": "https://th.bing.com/th/id/ODL.b11ac6333685826d50b7be2e4669ea99?w=312&h=200&c=12&rs=1&pcl=faf9f7&o=6&dpr=1.3&pid=AlgoBlockDebug",
        "Gustavo Fring": "https://m.media-amazon.com/images/I/517Uthp7i5L.jpg",
        "The Fly": "https://images.rapgenius.com/b383ed94000ef6718945ae26b375bef4.450x551x1.jpg",
        "Todd": "https://media.tenor.com/BH1Bkrev4RwAAAAC/breaking-bad-todd.gif",
        "Tio Salamanca": "https://media.assettype.com/freepressjournal/2023-08/5b889362-b501-4df3-90c4-134106f7c51c/1ef1fd39c91415fec4678b6c0d64414601001655jpg.webp",
        "Gale Boetticher": "https://th.bing.com/th/id/R.8017b4126ed026b4c5bf796f22da0993?rik=f78ZAEjX1Bo22w&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20130728212600%2fbreakingbad%2fimages%2fd%2fdd%2fYoungGale.png&ehk=MR11yE6%2fr5emnARw%2bmVWh3d4HC8eBxfYEQyWLmGHwQI%3d&risl=&pid=ImgRaw&r=0",
        "Walter White Jr": "https://tse1.explicit.bing.net/th/id/OIP.Yojf80ysSBSFweb0VzY_GwHaJ4?cb=iwc2&rs=1&pid=ImgDetMain",
        "Stephen King": "https://tse3.mm.bing.net/th/id/OIP.2xgXsq5h280rVD7msZ0tmQHaEK?cb=iwc2&rs=1&pid=ImgDetMain",
        "Maria Schrader": "https://th.bing.com/th/id/R.e5979abc2f7f15599ab2dee2feda4b4d?rik=uLOvZXw6%2bF9BlA&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20131015160538%2fbreakingbad%2fimages%2fa%2fad%2f5x14_-_marie.png&ehk=8%2f0lmMi%2beCefnnZp3ad9dmdyvj0kr1Y%2bLYZQlQHQ4w0%3d&risl=&pid=ImgRaw&r=0",
        

        // Add more authors and images as needed
    };

    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const json = await data.json();
    quote = json[0].quote;
    author = json[0].author;

    if (quote) {
        document.getElementById("quotetext").innerText = "''" + quote + "''";
        console.log(quote);
    }

    if (author) {
        document.getElementById("authortext").innerText = "-" + author;
        console.log(author);    

        // Set image based on author
        const imgSrc = authorImages[author] || "default.jpg"; // Fallback image
        document.getElementById("imagesource").src = imgSrc;
    }
}

getQuote();
