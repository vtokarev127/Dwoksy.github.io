var link = document.querySelector(".btn-aside");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us-close");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("write-us-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("write-us-show");
  popup.classList.add("close");
  setTimeout(function() {
     popup.classList.remove("close");
   }, 600);
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("write-us-show")){
      popup.classList.remove("write-us-show");
    }
  }
});

ymaps.ready(init);

function init(){

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.93863106417266,30.3230545],
        zoom: 17,
        controls: []
    });

    myMap.behaviors.disable("scrollZoom");

    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });

    var myPlacemark = new ymaps.Placemark([59.93863106417266,30.3230545] , {},
        { iconLayout: "default#image",
          iconImageHref: "http://s019.radikal.ru/i638/1609/28/5e0efbede5f0.png",
          iconImageSize: [231, 190],
          iconImageOffset: [-50, -190] });

    myMap.geoObjects.add(myPlacemark);

}
