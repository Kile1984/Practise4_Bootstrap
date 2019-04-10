var width = screen.width;
var height = screen.height;

function initMap() {
	// Create a map object and specify the DOM element for display.
	var myLatLng = {lat: 48.762098, lng: 20.475104};
    var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 16
     });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Auto Škola GOLD SIGNAL'
	});
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}