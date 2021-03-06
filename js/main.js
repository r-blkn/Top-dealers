let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__nav');
let back = document.querySelector('body');


header__burger.onclick = function(){
    header__burger.classList.toggle('active');
	 header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}


new Swiper('.detailing-slider', {
	autoheight: true,
	watchOverflow: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		}
	}
});

new Swiper('.showroom-slider', {
	autoheight: true,
	watchOverflow: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

new Swiper('.tuning-slider', {
	autoheight: true,
	watchOverflow: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

let inputs = document.querySelectorAll('.input-file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input-file-button-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.input-file-button-text').innerText = 'Вибрано файлів: ' + countFiles;
    else
      label.querySelector('.input-file-button-text').innerText = labelVal;
  });
});

let inputts = document.querySelectorAll('.input_file');
Array.prototype.forEach.call(inputts, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.input_file-button-text').innerText;
  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;
    if (countFiles)
      label.querySelector('.input_file-button-text').innerText = 'Вибрано файлів: ' + countFiles;
    else
      label.querySelector('.input_file-button-text').innerText = labelVal;
  });
});