$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
  /*slider*/

  const btn1 = document.querySelector('.slider-button1');
  const btn2 = document.querySelector('.slider-button2');
  const btn3 = document.querySelector('.slider-button3');
  const sliderContainer = document.querySelector('.slider-container');
  const btns = document.querySelectorAll('.slider-buttons');
  const slider1 = document.createElement('div');
  const slider2 = document.createElement('div');
  const slider3 = document.createElement('div');
  slider1.className = 'slider1';
  slider2.className = 'slider2';
  slider3.className = 'slider3';
  sliderContainer.appendChild(slider1);
  sliderContainer.appendChild(slider2);
  sliderContainer.appendChild(slider3);

  const formulaArray = [
    'img/slider/formula standard.jpg',
    'img/slider/formula-outside.jpg',
    'img/slider/formula-complex.jpg',
    'img/slider/formula express.jpg',
    'img/slider/formula standard price.jpg',
    'img/slider/formula outside price.jpg',
    'img/slider/formula express price.jpg',
    'img/slider/formula complex price.jpg'
  ];
  const businessArray = [
    'img/slider/business standard.jpg',
    'img/slider/business.jpg',
    'img/slider/business standard price.jpg',
    'img/slider/business price.jpg'
  ];
  const premiumArray = [
    'img/slider/premium.jpg',
    'img/slider/premium price.jpg'
  ];
  appendImg(formulaArray);
  appendImg(businessArray);
  appendImg(premiumArray);
  function appendImg(array) {
    for (let i = 0; i < array.length; i++) {
      var img = document.createElement('img');
      img.src = array[i];
      if (array == formulaArray) {
        slider1.appendChild(img);
      } else if (array == businessArray) {
        slider2.appendChild(img);
      } else if (array == premiumArray) {
        slider3.appendChild(img);
      }
    }
  }
  changeTab(formulaArray);
  function changeTab(array) {
    for (let i = 0; i < array.length; i++) {
      if (array == formulaArray) {
        slider2.classList.add('hidden');
        slider3.classList.add('hidden');
        slider1.classList.remove('hidden');
      } else if (array == businessArray) {
        slider1.classList.add('hidden');
        slider3.classList.add('hidden');
        slider2.classList.remove('hidden');
      } else if (array == premiumArray) {
        slider1.classList.add('hidden');
        slider2.classList.add('hidden');
        slider3.classList.remove('hidden');
      }
    }
  }

  btn1.addEventListener('click', e => {
    e.preventDefault();
    $(window).trigger('resize');
    btn1.style.border = "5px solid #ff0000;"
    btn2.style.border = "5px solid #000000;"
    btn3.style.border = "5px solid #000000;"
    changeTab(formulaArray);
  });
  btn2.addEventListener('click', e => {
    e.preventDefault();
    $(window).trigger('resize');
    btn2.style.border = "5px solid #ff0000;"
    btn1.style.border = "5px solid #000000;"
    btn3.style.border = "5px solid #000000;"
    changeTab(businessArray);
  });
  btn3.addEventListener('click', e => {
    e.preventDefault();
    $(window).trigger('resize');
    btn3.style.border = "5px solid #ff0000;"
    btn2.style.border = "5px solid #000000;"
    btn1.style.border = "5px solid #000000;"
    changeTab(premiumArray);
  });
  /*end slider*/
  $('.slider1').slick({
    prevArrow: '<div class="prevArrow"></div>',
    nextArrow: '<div class="nextArrow"></div>'
  });
  $('.slider2').slick({
    prevArrow: '<div class="prevArrow"></div>',
    nextArrow: '<div class="nextArrow"></div>'
  });
  $('.slider3').slick({
    prevArrow: '<div class="prevArrow"></div>',
    nextArrow: '<div class="nextArrow"></div>'
  });
});


//video mute button
const muteButton = document.getElementById('mute');
const video = document.getElementById('video');
muteButton.style.background = 'url("img/speaker.png") no-repeat center';
muteButton.addEventListener("click", function () {
  if (video.muted == false) {
    // Mute the video
    video.muted = true;

    // Update the button text
    muteButton.style.background = 'url("img/speaker.png") no-repeat center';

  } else {
    // Unmute the video
    video.muted = false;

    // Update the button text
    muteButton.style.background = 'url("img/mute.png") no-repeat center';
  }
});