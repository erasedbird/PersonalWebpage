new TypeIt('#hi', {
  // strings: 'After typing, the cursor will disappear.',
  speed: 60, 
  startDelay: 900,
  afterComplete: function (instance) {
    instance.pause(5000)
    instance.destroy();
  }
}).go();

let slideIndex = [1,1,1,1, 1, 1,1,1];
let slideId = ["6a01slideshow", "poeslideshow", "soslideshow","hootyslideshow", "upslideshow", "tcslideshow", "bislideshow","hmslideshow"]

for (i = 0; i < 8; i++){
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}