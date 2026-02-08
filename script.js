const noBtn = document.getElementById("btn-no");
const liste = ["MAIS","VTFF","ARRETE","Mais vtff","STOP","Ah ouais carrément","Bah clique sur oui, non ?","ah."];

noBtn.addEventListener("click", () => {

    noBtn.style.position = "absolute";

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    const index = Math.floor(Math.random() * liste.length);
    alert(liste[index])

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

const yesBtn = document.getElementById("btn-yes");
const image = document.getElementById("slideshow"); // <-- ajouté !

let press = false;

const images = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png",
    "images/img7.png",
    "images/img8.png",
    "images/img9.png",
    "images/img10.png"
];

let index = 0;

yesBtn.addEventListener("click", () => {
    if (!press) {
        document.body.style.backgroundColor = "#a80000";
        document.body.classList.add("fond-coeur");

        yesBtn.classList.add("fade-out");
        noBtn.classList.add("fade-out");

        const music = new Audio("videoplayback.mp3");
        music.play();
        press = true;

        // Affichage du slideshow
        image.style.display = "block";
        image.src = images[index];

        setInterval(() => {
            index++;
            if (index < images.length) {
                image.src = images[index];
            }
        }, 2000); // change toutes les 2 secondes
    }
});

