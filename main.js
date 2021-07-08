var imageSources = ["1.svg","2.svg","3.svg","4.svg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image_change").src = imageSources[index];
  index++;
} , 5000);