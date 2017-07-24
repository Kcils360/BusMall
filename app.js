'use strict';

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
  this.timesShown = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum' ,'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
}

new Image('banana');
new Image('sweep');
new Image('usb');

Image.imgEl1 = document.getElementById('image_one');
Image.imgEl2 = document.getElementById('image_two');
Image.imgEl3 = document.getElementById('image_tre');

function randomImage(){
  // console.log(e.target.alt);
  // if(e.target.alt === 'sweep'){
  //   alert('OMG A BABY GOAT');
  // }
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  randomImage2();
  randomImage3();

  // console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
}
function randomImage2(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  randomImage();
  randomImage3();
}
function randomImage3(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  randomImage();
  randomImage2();
}




document.getElementById('image_one').addEventListener('click', randomImage);
document.getElementById('image_two').addEventListener('click', randomImage2);
document.getElementById('image_tre').addEventListener('click', randomImage3);
document.getElementById('image_section').addEventListener('click', alert('Click on a Pic'));


randomImage();
randomImage2();
randomImage3();
