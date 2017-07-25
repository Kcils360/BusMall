'use strict';

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum' ,'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
}
Image.imgEl1 = document.getElementById('image_one');
Image.imgEl2 = document.getElementById('image_two');
Image.imgEl3 = document.getElementById('image_tre');



var randomImage1 = function(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex].source;
  Image.imgEl1.alt = Image.all[randomIndex].name;
  dedpulicate();
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
  // console.log(Image.all[randomIndex].name + ' is clicked ' + Image.all[randomIndex].timesClicked);
  // console.log(Image.imgEl1.src);
};
var randomImage2 = function(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl2.src = Image.all[randomIndex].source;
  Image.imgEl2.alt = Image.all[randomIndex].name;
  dedpulicate();
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
  // console.log(Image.all[randomIndex].name + ' is clicked ' + Image.all[randomIndex].timesClicked);
  // console.log(Image.imgEl2.src);

};
var randomImage3 = function(){
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl3.src = Image.all[randomIndex].source;
  Image.imgEl3.alt = Image.all[randomIndex].name;
  dedpulicate();
  Image.all[randomIndex].timesShown += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times');
  // console.log(Image.all[randomIndex].name + ' is clicked ' + Image.all[randomIndex].timesClicked);
  // console.log(Image.imgEl3.src);

};
function dedpulicate(){
  if(Image.imgEl1.src === Image.imgEl2.src || Image.imgEl1.src === Image.imgEl3.src) {
    randomImage1();
    console.log('Rerun 1');
  } else if (Image.imgEl2.src === Image.imgEl3.src) {
    randomImage2();
    console.log('Rerun 2');
  }
};
function generateRandomImages (){
  randomImage1();
  randomImage2();
  randomImage3();
};


document.getElementById('image_section').addEventListener('click', generateRandomImages);
// document.getElementById('image_one').addEventListener('click', addClicks);
// document.getElementById('image_two').addEventListener('click', addClicks);
// document.getElementById('image_tre').addEventListener('click', addClicks);

// document.getElementById('image_section').addEventListener('click', alert('Click on a Pic'));
// document.getElementById('image_section').addEventListener('click',addClicks);
