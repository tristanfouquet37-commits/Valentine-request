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
let press = false;

yesBtn.addEventListener("click", () => {
    if (!press) {
        document.body.style.backgroundColor = "#a80000";
        
        yesBtn.classList.add("fade-out");
        noBtn.classList.add("fade-out");

        const music = new Audio("videoplayback.mp3");
        music.play();
        press = true;
    }
});

