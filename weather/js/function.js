/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */

//console.log('My javascript is being read.');

// Variables for Function Use
const temp = 31;
const speed = 5;
buildWC(speed, temp);

const direction = "NW"; //Change this value to test it
windDial(direction);


// Calculate the Windchill
function buildWC(speed, temp) {
 const feelTemp = document.getElementById('feels-like');

 //Compute wind chill
 let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
 console.log(wc);

 // Round the answer down to integer
 wc = Math.floor(wc);

 // If chill is greater than temp, return the temp
 wc = (wc > temp) ? temp : wc;

 // Display the windchill
 console.log(wc);
 wc = 'Feels like ' + wc + '&deg;F';
 feelTemp.innerHTML = wc;
}


// Wind Dial Function
function windDial(direction) {
 // Get the wind dial container
 const dial = document.getElementById("dial");
 console.log(direction);

 // Determine the dial class
 switch (direction) {
  case "North":
  case "N":
   dial.setAttribute("class", "n"); //"n" is the CSS rule selector
   break;

  case "NE":
  case "NNE":
  case "ENE":
   dial.setAttribute("class", "ne");
   break;

  case "NW":
  case "NNW":
  case "WNW":
   dial.setAttribute("class", "nw");
   break;

  case "South":
  case "S":
   dial.setAttribute("class", "s");
   break;

  case "SE":
  case "SSE":
  case "ESE":
   dial.setAttribute("class", "se");
   break;

  case "SW":
  case "SSW":
  case "WSW":
   dial.setAttribute("class", "sw");
   break;

  case "East":
  case "E":
   dial.setAttribute("class", "e");
   break;

  case "West":
  case "W":
   dial.setAttribute("class", "w");
   break;
 }
}

//Variables to use in background image functions
const CURWEATHER = "raining"; //change this to test
let weatherImage = getCondition(CURWEATHER);

changeSummaryImage(weatherImage);

//javascript function that will change all of it to lowercase so you don't need to check for upper or lower case
//do two or three tests for each image (rain, clouds, clear, snow, fog)

function getCondition(CURWEATHER) {
 if (CURWEATHER.includes("cloud") || CURWEATHER.includes("overcast")) {
  return 'cloud';
 }

 else if (CURWEATHER.includes('rain') || CURWEATHER.includes('damp')) {
  return 'rain';
 }

 else if (CURWEATHER.includes('sun') || CURWEATHER.includes('clear')) {
  return 'clear';
 }

 else if (CURWEATHER.includes('snow') || CURWEATHER.includes('cold')) {
  return 'snow';
 }

 else(CURWEATHER.includes('fog') || CURWEATHER.includes('hazy'))
 return 'fog';

}

function changeSummaryImage(weatherImage) {
 // Get the background image container
 const summaryImage = document.getElementById("cur-weather");
 console.log(weatherImage);

 //switch statements to set class
 switch (weatherImage) {
  case "cloud":
   summaryImage.setAttribute("class", "cloud");
   break;

  case "rain":
   summaryImage.setAttribute("class", "rain");
   break;

  case "clear":
   summaryImage.setAttribute("class", "clear");
   break;

  case "snow":
   summaryImage.setAttribute("class", "snow");
   break;

  case "fog":
   summaryImage.setAttribute("class", "fog");
   break;
 }
}
