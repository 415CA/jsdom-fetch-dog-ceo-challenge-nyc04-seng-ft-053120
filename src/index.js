console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', (event) => {
  loadImages();
  loadBreeds();
});

const loadImages = () => {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
  fetch(imgUrl)
    .then((response) => response.json())
    .then((dogObject) => {
      dogObject.message.forEach((dogImg) => addImage(dogImg));
    });
};

const addImage = (dogImg) => {
  const dogDiv = document.querySelector('#dog-image-container');
  const newImg = document.createElement('img');
  newImg.src = dogImg;
  dogDiv.append(newImg);
};

const loadBreeds = () => {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
    .then((response) => response.json())
    .then((breedObject) => {
      const breeds = Object.keys(breedObject.message);
      breeds.forEach((breed) => {
        addBreed(breed);
      });
    });
};

const addBreed = (breed) => {
  const breedUl = document.querySelector('#dog-breeds');
  const newLi = document.createElement('li');
  newLi.innerText = breed;
  newLi.append(breed);
  breedUl.append(newLi);
  newLi.addEventListener('click', changeColor);
};

const changeColor = (event) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  event.target.style.color = `#${randomColor}`;
};
