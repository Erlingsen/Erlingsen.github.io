// Kjør når hele HTML-dokumentet er lastet inn
document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 1; // Start med første bilde
    showDivs(slideIndex); // Vis første bilde

    // Øk eller mink slideIndex og vis riktig bilde
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    // Vis bildet som tilsvarer gitt indeks, skjul resten
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides"); // Hent alle bilder i slideshowet
        if (n > x.length) { slideIndex = 1; } // Gå tilbake til første bilde hvis forbi siste
        if (n < 1) { slideIndex = x.length; } // Gå til siste bilde hvis forbi første
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; // Skjul alle bilder
        }
        x[slideIndex - 1].style.display = "block"; // Vis valgt bilde
    }

    // Legg til klikklytter for venstre pil (gå til forrige bilde)
    document.querySelector(".w3-display-left").addEventListener("click", function () {
        plusDivs(-1);
    });

    // Legg til klikklytter for høyre pil (gå til neste bilde)
    document.querySelector(".w3-display-right").addEventListener("click", function () {
        plusDivs(1);
    });
});
