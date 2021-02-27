const data = [
  {
    id: 1,
    src: "./img/888casino.jpg",
    link: "http://www.888casino.com",
  },
  {
    id: 2,
    src: "./img/888ladies.jpg",
    link: "http://www.888ladies.com",
  },
  {
    id: 3,
    src: "./img/888poker.jpg",
    link: "http://www.888poker.com",
  },
  {
    id: 4,
    src: "./img/888sport.jpg",
    link: "http://www.888sport.com",
  },
];

const images = data.map(createImage);

function createImage({ id, link, src }) {
  const a = document.createElement("a");
  a.setAttribute("href", link);
  a.setAttribute("id", id);
  a.setAttribute("target", "_blank");
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "888");
  a.appendChild(img);
  return a;
}


document.getElementById("gallery").appendChild(images[0]);

let i = 1;
const time = 3000;

function changePic() {
  document.getElementById("gallery").innerHTML = "";
  document.getElementById("gallery").appendChild(images[i]);
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

setInterval(changePic, time);
