'use strict';

var clicks = [];
var showed = [];
var names = [];
var surveyChart;
var chartDrawn = false;
var lastShown = [];

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

function randomImages(){//display images
  var randomIndex = [];
  // function deduplicate(){
    randomIndex[0] = makeRandomNumber();
    randomIndex[1] = makeRandomNumber();
    while(randomIndex[0] === randomIndex[1]){
      randomIndex[1] = makeRandomNumber();
    }
    randomIndex[2] = makeRandomNumber();
    while(randomIndex[2] === randomIndex[1] || randomIndex[2] === randomIndex[0]){
      randomIndex[2] = makeRandomNumber();
    // };
  }
  for(var i = 0; i < randomIndex.length; i++){
    while(randomIndex[i] === lastShown[0] || randomIndex[i] === lastShown[1] || randomIndex[i] === lastShown[2] || (randomIndex[0] === randomIndex[1]) || (randomIndex[2] === randomIndex[1] || randomIndex[2] === randomIndex[0])){
      randomIndex[i] = makeRandomNumber();
    }// deduplicate();
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
  lastShown = randomIndex;
};
function handleClick(e){
  localStorage.userClickInfo = JSON.stringify(Image.all);
  if(e.target.id === 'image_section'){
    return alert('Please select an image');
  }
  Image.totalClicks += 1;
  for(var i = 0; i < Image.all.length; i++){
    if(e.target.alt === Image.all[i].name){
      Image.all[i].timesClicked++;
    }
  }
  if(Image.totalClicks === 25){
    document.getElementById('image_section').removeEventListener('click', handleClick);
    // showList();
    updateChartArrays();
    removeSurvey();
    return drawChart();
  }
  randomImages();
}
function removeSurvey(){
  Image.imgEl1.src = '';
  Image.imgEl2.src = '';
  Image.imgEl3.src = '';
  Image.imgEl1.alt = '';
  Image.imgEl2.alt = '';
  Image.imgEl3.alt = '';
  document.getElementById('image_section').style.border = 'none';
  document.getElementById('image_section').style.height = '50px';
  document.getElementById('survey_message').textContent = 'Thank you for your time';
}
// function showList(){
//   var ulEl = document.getElementById('the_list');
//   for(var i = 0; i < Image.all.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = Image.all[i].name + ' was shown ' + Image.all[i].timesShown + ' times, and was clicked ' + Image.all[i].timesClicked + 'times.';
//     ulEl.appendChild(liEl);
//   }
// }
if(localStorage.length > 0){
  Image.all = JSON.parse(localStorage.userClickInfo);
} else {
  randomImages();
}

randomImages();
document.getElementById('image_section').addEventListener('click', handleClick);

//++++++++++++++++++++++++++++++++CHART+++++++++++++++++++++++++++++++++++

function updateChartArrays() {
  for (var i = 0; i < Image.all.length; i++) {
    clicks[i] = Image.all[i].timesClicked;
    showed[i] = Image.all[i].timesShown;
    names[i] = Image.all[i].name;
  }
}

var data = {
  labels: names,
  datasets: [
    {
      data: clicks,
      label: 'Survey Analasys',
      backgroundColor: [
        '#3C15CD',
        '#785ED8',
        '#5939D0',
        '#2C0CA2',
        '#22097E',
        '#88F100',
        '#B0F457',
        '#9BF22A',
        '#79D600',
        '#5EA700',
        '#FFD100',
        '#FFE15B',
        '#FFD92D',
        '#EBC000',
        '#B79500',
        '#E70061',
        '#EC5595',
        '#E9297A',
        '#C80054',
        '#9C0042',
      ],
      hoverBackgroundColor: [
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
        '#FF0700',
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('BusMall_chart').getContext('2d');
  surveyChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  chartDrawn = true;
}
