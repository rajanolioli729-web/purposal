// ================================
// Typewriter Effect
// ================================
const text = "Dear Puja ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}
typeWriter();


// ================================
// Falling Hearts
// ================================
const heartContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💖","💕","💗","💓"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 35) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 120);


// ================================
// No Button Escape
// ================================
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    noBtn.style.position = "absolute";

    noBtn.style.left = Math.random() * 80 + "%";

    noBtn.style.top = Math.random() * 80 + "%";

});


// ================================
// Yes Button
// ================================
const yesBtn = document.getElementById("yesBtn");
const form = document.getElementById("proposalForm");

yesBtn.addEventListener("click", () => {

    document.getElementById("answer").value =
        "❤️ Puja clicked YES! ❤️";

    fireworks();

    setTimeout(() => {

        form.submit();

        document.getElementById("success").style.display = "flex";

    }, 2000);

});


// ================================
// Fireworks
// ================================
function fireworks(){

for(let i=0;i<300;i++){

const particle=document.createElement("div");

particle.innerHTML="✨";

particle.style.position="fixed";

particle.style.left="50%";

particle.style.top="50%";

particle.style.fontSize=(10+Math.random()*20)+"px";

particle.style.pointerEvents="none";

particle.style.zIndex="999";

document.body.appendChild(particle);

let x=(Math.random()-0.5)*900;

let y=(Math.random()-0.5)*900;

particle.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:2500

});

setTimeout(()=>{

particle.remove();

},2500);

}

}


// ================================
// Floating Sparkles
// ================================
function sparkle(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(8+Math.random()*12)+"px";

star.style.opacity=Math.random();

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{
opacity:0
},

{
opacity:1
},

{
opacity:0
}

],{

duration:2500

});

setTimeout(()=>{

star.remove();

},2500);

}

setInterval(sparkle,250);


// ================================
// Heart Burst on Click
// ================================
document.addEventListener("click",(e)=>{

for(let i=0;i<15;i++){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=e.clientX+"px";

h.style.top=e.clientY+"px";

h.style.fontSize=(10+Math.random()*20)+"px";

document.body.appendChild(h);

let x=(Math.random()-0.5)*300;

let y=(Math.random()-0.5)*300;

h.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1200

});

setTimeout(()=>{

h.remove();

},1200);

}

});


// ================================
// Background Music (Autoplay)
// ================================
const music = new Audio("mp4.mp4");
music.loop = true;
music.volume = 0.7;

// Try to autoplay when page loads
window.addEventListener("load", () => {
    music.play().catch(err => {
        console.log("Autoplay blocked by browser:", err);
    });
});


// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});