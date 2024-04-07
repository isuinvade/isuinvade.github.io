const images = ["image/img1.jpeg", "image/img2.jpeg", "image/img3.jpeg"]

const todaysImg = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");

bgImg.src = todaysImg;

document.body.appendChild(bgImg);