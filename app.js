'use strict';
var clickedImages  = 0;
var previouslyShown = [];
var numberOfClicks = 0;

function Image(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';  //this is the source of the images for the website
  this.timesShown = 0;
  this.timesClicked = 0;
  Image.all.push(this);
}
Image.totalClicks = 0;
Image.all = [];
Image.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum' ,'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

for(var i = 0; i < Image.allNames.length; i++){
  new Image(Image.allNames[i]);
}
Image.imgEl1 = document.getElementById('image_one');
Image.imgEl2 = document.getElementById('image_two');
Image.imgEl3 = document.getElementById('image_tre');




function makeRandomNumber(){
  return Math.floor(Math.random() * Image.all.length);
};
// +++++++++++++++++++++++++MY CODE+++++++++++++++++++++++++++++++++++++++++++++++++
function randomImages(){//display images
  var randomIndex = [];
  randomIndex[0] = makeRandomNumber();
  randomIndex[1] = makeRandomNumber();
  while(randomIndex[0] === randomIndex[1]){
    randomIndex[1] = makeRandomNumber();
  }
  randomIndex[2] = makeRandomNumber();
  while(randomIndex[2] === randomIndex[1] || randomIndex[2] === randomIndex[0]){
    randomIndex[2] = makeRandomNumber();
  }
  Image.imgEl1.src = Image.all[randomIndex[0]].source;
  Image.imgEl2.src = Image.all[randomIndex[1]].source;
  Image.imgEl3.src = Image.all[randomIndex[2]].source;
  Image.imgEl1.alt = Image.all[randomIndex[0]].name;
  Image.imgEl2.alt = Image.all[randomIndex[1]].name;
  Image.imgEl3.alt = Image.all[randomIndex[2]].name;
  Image.all[randomIndex[0]].timesShown++;
  Image.all[randomIndex[1]].timesShown++;
  Image.all[randomIndex[2]].timesShown++;
};

function showList(){
  var ulEl = document.getElementById('the_list');
  for(var i = 0; i < Image.all.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = Image.all[i].name + ' was shown ' + Image.all[i].timesShown + ' times, and was clicked ' + Image.all[i].timesClicked + 'times.';
    ulEl.appendChild(liEl);
  }
}

function handleClick(e){
  Image.totalClicks += 1;
  if(Image.totalClicks === 5){
    document.getElementById('image_section').removeEventListener('click', handleClick);
    showList();
  }
  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.all[i].name){
      Image.all[i].timesClicked++;
    }
    randomImages();
  }
}


randomImages();

document.getElementById('image_section').addEventListener('click', handleClick);

//   alert('Please click an image');
//   return;

//   }
// };
//
// }
//
// function displayImages(){
//   var numbers = [];
//   numbers[0] = makeRandomNumber;
//   numbers[1] = makeRandomNumber;
//   if(numbers[0] === numbers[1]){
//     makeRandomNumber();
//   }
//   numbers[2] = makeRandomNumber;
//   while (numbers[0] === numbers[2] || numbers[1] === numbers[2]){
//     numbers[2] = makeRandomNumber;
//   }
//   Image.imgEl1.src = Image.all[numbers[0]].source;
//   Image.imgEl2.src = Image.all[numbers[1]].source;
//   Image.imgEl3.src = Image.all[number2[2]].source;
//   Image.imgEl1.alt = Image.all[numbers[0]].name;
//   Image.imgEl2.alt = Image.all[numbers[1]].name;
//   Image.imgEl3.alt = Image.all[number2[2]].name;
//   Image.all[numbers[0]].timesShown += 1;
//   Image.all[numbers[1]].timesShown += 1;
//   Image.all[number2[2]].timesShown += 1;
//   previouslyShown = numbers;
// }
//
//
// function handleClick(e){
//   console.log(e.target.alt);
//   Image.numberOfClicks += 1;
//   if(Image.numberOfClicks === 25){
//     document.getElementById('image_section').removeEventListener('click', generateRandomImages);
//   }
//   for(var i = 0; i < Image.all.length; i++){
//     if(e.target.alt === Image.all[i].name){
//     }
//     showList();
//   }
//   displayImages();
// }
// displayImages();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
