// ------------  model  ----------------------------------------

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

// ---------------  view ---------------------------------------------

const $imgContainer = document.querySelector('.img_container');
const $catList = document.querySelector('#catList');
let $catTitle = document.querySelector('#catContainer h3');
let $catImg = document.querySelector('#catContainer img');
let $catCounter = document.querySelector('#catContainer p');
const $adminBtn = document.querySelector('#adminBtn');
const $adminCancel = document.querySelector('#adminCancel');
const $adminSave = document.querySelector('#adminSave');
const $adminAside = document.querySelector('#adminAside');
const $catName = document.querySelector('#catName');
const $catSrc = document.querySelector('#catSrc');
const $catCount = document.querySelector('#catCounter');

function showAdmin() {
  if ($adminAside.style.display = 'none') {
    $adminAside.style.display = 'block';
  }
}

function hideAdmin() {
  if ($adminAside.style.display = 'block') {
    $adminAside.style.display = 'none';
  }
}

$catImg.addEventListener('click', updateCounter);

$adminBtn.addEventListener('click', function () {
  showAdmin();
  fillAdminFields();
});

$adminCancel.addEventListener('click', hideAdmin);
$adminSave.addEventListener('click', handleCatUpdate);

// -----------------  octopus  -----------------------------------------

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
      fillAdminFields();
    });
  });
}

function updateCounter() {
  cats.forEach((cat) => {
    if ($catImg.alt === cat.alt) {
      cat.counter++;
      $catCounter.innerHTML = cat.counter;
      fillAdminFields();
    }
  });
}

function fillAdminFields() {
  $catName.value = $catTitle.innerHTML;
  $catSrc.value = $catImg.src;
  $catCount.value = $catCounter.innerHTML;
}

function handleCatUpdate() {
  cats.forEach((cat) => {
    if ($catImg.alt === cat.alt) {
      // update model
      cat.name = $catName.value;
      cat.src = $catSrc.value;
      cat.counter = $catCount.value;
      // update view
      $catCounter.innerHTML = cat.counter;
      $catTitle.innerHTML = cat.name;
      $catImg.src = cat.src;
      if (!!$catList) {
        while ($catList.firstChild) { $catList.firstChild.remove(); }
      }
      init();
      hideAdmin();
    }
  });
}

init();