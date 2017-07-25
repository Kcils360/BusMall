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
  var randomIndex1 = Math.floor(Math.random() * Image.all.length);
  var randomIndex2 = Math.floor(Math.random() * Image.all.length);
  var randomIndex3 = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex1].source;
  Image.imgEl1.alt = Image.all[randomIndex1].name;
  Image.imgEl2.src = Image.all[randomIndex2].source;
  Image.imgEl2.alt = Image.all[randomIndex2].name;
  Image.imgEl3.src = Image.all[randomIndex3].source;
  Image.imgEl3.alt = Image.all[randomIndex3].name;
  dedpulicate();
  Image.all[randomIndex1].timesShown += 1;
  Image.all[randomIndex2].timesShown += 1;
  Image.all[randomIndex3].timesShown += 1;
  // console.log(Image.all[randomIndex1].name + ' has been shown ' + Image.all[randomIndex1].timesShown + ' times');
  // console.log(Image.all[randomIndex2].name + ' has been shown ' + Image.all[randomIndex2].timesShown + ' times');
  // console.log(Image.all[randomIndex3].name + ' has been shown ' + Image.all[randomIndex3].timesShown + ' times');
  console.table(Image.all[Image].timesShown);
};

function dedpulicate(){
  if(Image.imgEl1.src === Image.imgEl2.src || Image.imgEl1.src === Image.imgEl3.src || Image.imgEl2.src === Image.imgEl3.src) {
    randomImage1();
    console.log('Rerun 1');
  }
};

function generateRandomImages (e){
  console.log(e.target.alt + ' name clicked');
  if(e.target.alt == undefined){
    alert('Please click an image');
    return;
  }

  // if(Image.imgEl1.src || Image.imgEl2.src || Image.imgEl3.src == e.target.alt){
  //   Image.all[this].timesClicked += 1;
    // console.log(this.timesClicked);
  // }
  randomImage1();
};



document.getElementById('image_section').addEventListener('click', generateRandomImages);
