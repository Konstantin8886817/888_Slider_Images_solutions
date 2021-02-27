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
  return `
    <a id="${id}" href="${link}" target="_blank">
      <img src="${src}" alt="888"/>
    </a>
    `;
}

let curr = 0;
const gallery = document.getElementById("gallery");
gallery.innerHTML = images[curr++];

setInterval(() => {
  if (curr === images.length) {
    curr = 0;
  }
  gallery.innerHTML = images[curr++];
}, 3000);
