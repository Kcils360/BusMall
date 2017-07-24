'use strict';
var timesClicked1 = 0;
var timesClicked2 = 0;
var timesClicked3 = 0;

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
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
  // console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times');
}
function randomImage2(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
  // console.log(Image.all[randomIndex].name + ' has been clicked ' + Image.all[randomIndex].timesClicked + ' times');
}
function randomImage3(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');

}
function addClicks1(){
  timesClicked1 += 1;
  console.log('Img 1 is clicked ' + timesClicked1);
}
function addClicks2() {
  timesClicked2 += 1;
  console.log('Img 2 is clicked ' + timesClicked2);
}
function addClicks3() {
  timesClicked3 += 1;
  console.log('Img 3 is clicked ' + timesClicked3);
}





document.getElementById('image_section').addEventListener('click', randomImage);
document.getElementById('image_section').addEventListener('click', randomImage2);
document.getElementById('image_section').addEventListener('click', randomImage3);
document.getElementById('image_one').addEventListener('click', addClicks1);
document.getElementById('image_two').addEventListener('click', addClicks2);
document.getElementById('image_tre').addEventListener('click', addClicks3);

// document.getElementById('image_section').addEventListener('click', alert('Click on a Pic'));
// document.getElementById('image_section').addEventListener('click',addClicks);


randomImage();
randomImage2();
randomImage3();
