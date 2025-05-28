const lightFavicon = '../Bilder/Monogramhvit.png';
const darkFavicon = '../Bilder/Monogramsvart.png';

// Funksjon som oppdaterer href-attributtet til favicon-elementet med et nytt bilde
function setFavicon(href) {
    const link = document.getElementById('dynamisk-favicon'); // Hent favicon-elementet via ID
    if (link) {
        // Tvinger nettleseren til å refreshe faviconen
        link.href = href + '?v=' + new Date().getTime();
    }
}

// Sjekker browserens farge og kjører setFavicon basert på det
function oppdater() {
    // Hvis tema er mørkt, bruk lyst favicon
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setFavicon(lightFavicon);
    } else {
        // Hvis tema er lyst, bruk mørkt favicon
        setFavicon(darkFavicon);
    }
}

// Setter favicon når siden lastes inn
oppdater();

// Oppdager når browserens farge blir endret
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', oppdater);