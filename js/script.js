var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var slides = document.querySelectorAll('.slide');
var slidePages = document.querySelectorAll('.slide-page li');
var modalCart = document.querySelector('.modal-cart');
var buttonBuy = document.querySelectorAll('.buy');
var modalWriteUs = document.querySelector('.modal-write-us');
var modalClose = document.querySelectorAll('.modal-close');
var buttonWriteUs = document.querySelector('.contacts-map .btn');
var btnContinue = document.querySelector('.continue');
var serviceTabs = document.querySelectorAll('.service-navigation a');
var serviceBlocks = document.querySelectorAll('.service-about');
var mapBlock = document.querySelector('.modal-map');
var mapLink = document.querySelector('.map-mini');

if (modalWriteUs) {
  var form = modalWriteUs.querySelector('form');
  var userName = modalWriteUs.querySelector('[name=user-name]');
  var eMail = modalWriteUs.querySelector('[name=e-mail]');
  var textArea = modalWriteUs.querySelector('[name=text]');

  buttonWriteUs.addEventListener('click', function(event){
    event.preventDefault();
    closeWindows();
    modalWriteUs.classList.add('modal-show');
    userName.focus();
  });

  form.addEventListener('submit', function(event) {
    if (!userName.value || !eMail.value || !textArea.value) {
      modalWriteUs.classList.remove('modal-error');
      modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
      event.preventDefault();
      modalWriteUs.classList.add('modal-error');
    }
  });
}

if (slides && slidePages && prev && next) {
  prev.addEventListener('click', function(event){
    event.preventDefault();
    prevSlide();
  });

  next.addEventListener('click', function(event){
    event.preventDefault();
    nextSlide();
  });

  for (var i = 0; i < slidePages.length; i++) {
    clickPage (slidePages[i], slides[i]);
  }
}

window.addEventListener ('keydown', function(event) {
  if (event.keyCode == 27) {
    closeWindows();
  }
});

for (var i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function(event){
    event.preventDefault();
    closeWindows ();
  });
}

for (var i = 0; i < buttonBuy.length; i++) {
  buttonBuy[i].addEventListener('click', function(event){
    event.preventDefault();
    closeWindows();
    modalCart.classList.add('modal-show');
  });
}

btnContinue.addEventListener('click', function(event){
  event.preventDefault();
  closeWindows();
});

if (serviceTabs && serviceBlocks) {
  for (var i = 0; i < serviceTabs.length; i++) {
    clickTabs (serviceTabs[i], serviceBlocks[i]);
  }
}

if (mapLink) {
  mapLink.addEventListener ('click', function(event) {
    event.preventDefault();
    closeWindows ();
    mapBlock.classList.add('show-window');
  });
}

function cleanActive (control1, control2) {
  var i = 0;
  while (!control1[i].classList.contains('active')) {
    i++;
  }
  control1[i].classList.remove('active');
  control2[i].classList.remove('active');
  return i;
}

function prevSlide () {
  var n = cleanActive (slides, slidePages);
  if (n == 0) {
    n = slides.length - 1;
  } else {
    n -= 1;
  }
  slides[n].classList.add('active');
  slidePages[n].classList.add('active');
}

function nextSlide () {
  var n = cleanActive (slides, slidePages);
  if (n == (slides.length - 1)) {
    n = 0;
  } else {
    n++;
  }
  slides[n].classList.add('active');
  slidePages[n].classList.add('active');
}

function clickPage (control1, control2) {
  control1.addEventListener('click', function (event) {
    event.preventDefault();
    cleanActive (slides, slidePages);
    control1.classList.add('active');
    control2.classList.add('active');
  });
}

function clickTabs (control1, control2) {
  control1.addEventListener('click', function(event) {
    event.preventDefault();
    cleanActive(serviceTabs, serviceBlocks);
    control1.classList.add('active');
    control2.classList.add('active');
  });
}

function closeWindows () {
  if (modalCart.classList.contains('modal-show')) {
    modalCart.classList.remove('modal-show');
  }
  if (modalWriteUs && modalWriteUs.classList.contains('modal-show')) {
    modalWriteUs.classList.remove('modal-show');
  }
  if (modalWriteUs && modalWriteUs.classList.contains('modal-error')) {
    modalWriteUs.classList.remove('modal-error');
  }
  if (mapBlock && mapBlock.classList.contains('show-window')) {
    mapBlock.classList.remove('show-window');
  }
}
