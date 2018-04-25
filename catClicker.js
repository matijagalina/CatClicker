//view

const $imgContainer = document.querySelector('.img_container');
const $catList = document.querySelector('#catList');

let $catTitle = document.querySelector('#catContainer h3');
let $catImg = document.querySelector('#catContainer img');
let $catCounter = document.querySelector('#catContainer p');

$catImg.addEventListener('click', updateCounter);

// model

const cats = [
  {
    name: 'Cutty',
    src: 'img/cat_clicker_img.jpg',
    alt: 'image of a cat',
    counter: 0
  },
  {
    name: 'Dandy',
    src: 'img/second_cat_img.jpg',
    alt: 'cat hidding behind stairs',
    counter: 0
  },
  {
    name: 'Twins',
    src: 'img/third_cat_img.jpg',
    alt: 'two cats cuddling',
    counter: 0
  },
  {
    name: 'Halfy',
    src: 'img/fourth_cat_img.png',
    alt: 'cat with two colored face',
    counter: 0
  },
  {
    name: 'Lazy',
    src: 'img/fifth_cat_img.jpg',
    alt: 'lazy looking cat',
    counter: 0
  }
];

// octopus

function updateCounter() {
  cats.forEach((cat) => {
    if ($catImg.alt === cat.alt) {
      cat.counter++;
      $catCounter.innerHTML = cat.counter;
    }
  });
}

function init() {
  cats.forEach((cat) => {
    let $listItem = document.createElement('li');
    $listItem.innerHTML = cat.name;
    $catList.appendChild($listItem);

    $listItem.addEventListener('click', () => {
      $catCounter.innerHTML = cat.counter;
      $catTitle.innerHTML = cat.name;
      $catImg.src = cat.src;
      $catImg.alt = cat.alt;
    });
  });
}

init();