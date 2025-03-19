document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = x.length; }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

    // Attach event listeners to buttons
    document.querySelector(".w3-display-left").addEventListener("click", function () {
        plusDivs(-1);
    });

    document.querySelector(".w3-display-right").addEventListener("click", function () {
        plusDivs(1);
    });
});
