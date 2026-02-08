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
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img9.jpg",
    "images/img10.jpg",
    "images/img11.jpg",
    "images/img12.jpg",
    "images/img13.jpg",
    "images/img14.jpg",
    "images/img15.jpg",
    "images/img16.jpg",
    "images/img17.jpg",
    "images/img18.jpg",
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
