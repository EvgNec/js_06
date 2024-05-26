const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector(".gallery");

const elements = images.map(({ url, alt }) => {
  const liEl = document.createElement("li");
  const  imgEl = document.createElement("img");
  liEl.appendChild(imgEl);
  imgEl.src = url; 
  imgEl.alt = alt;
  liEl.classList.add("item");
  return liEl;
}
);
listEl.append(...elements);
 
/*---------------*/

const listEl2 = document.querySelector(".gallery");
const elements2 = images.map(({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}"</li>`
).join("");
listEl2.insertAdjacentHTML("beforeend", elements2);

listEl2.style.display = "flex";
listEl2.style.gap = "60px";
listEl2.style.listStyle = "none";
listEl2.style.flexWrap = 'wrap';


/*---------------*/

const listEl3 = document.querySelector(".gallery");

const makeImgList = img => {
  return img.map(({ url, alt }) => {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");
    liEl.appendChild(imgEl);
    imgEl.src = url;
    imgEl.alt = alt;
    liEl.classList.add("item");
    return liEl;
  });
};
const elems = makeImgList(images);
listEl3.append(...elems);