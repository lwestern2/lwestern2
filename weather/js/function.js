/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */




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

function getCondition(curWeather) {
 curWeather = curWeather.toLowerCase(); //convert all to lower case

 if (curWeather.includes("cloud") || curWeather.includes("overcast")) {
  return 'cloud';
 } else if (curWeather.includes('rain') || curWeather.includes('damp')) {
  return 'rain';
 } else if (curWeather.includes('sun') || curWeather.includes('clear')) {
  return 'clear';
 } else if (curWeather.includes('snow') || curWeather.includes('ice')) {
  return 'snow';
 } else if (curWeather.includes('fog') || curWeather.includes('hazy')) {
  return 'fog';
 } else //if curWeather doesn't match anything, default display clear
  return 'clear';
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

// Get Data from API
function getData(LOCALE) {
 const WU_API_KEY = 'a648268d6c5ab2de';
 const URL = "https://api.wunderground.com/api/" + WU_API_KEY + "/conditions/forecast/hourly/q/" + LOCALE + ".json";

 fetch(URL)
  .then(response => response.json())
  .then(function (data) {
   console.log('Json object from getData function:');
   console.log(data);
   displayData(data);
  })
  .catch(error => console.log('There was an error: ', error))
} // end getData function

// Populate the current location weather page
function displayData(data) {
 // Task 1 - Feed data to WC, Dial and Image functions
 //Get temp and wind speed, then pass them into the wind chill function
 //Get and display current temp
 let temp = data.current_observation.temp_f;
 console.log(temp);
 document.getElementById("current-temp").innerHTML = Math.round(temp) + '&deg;F';

 //Get and display wind speed
 let speed = data.current_observation.wind_mph;
 console.log(speed);
 document.getElementById("wind-speed").innerHTML = speed + " mph";

 //Wind chill - call function
 buildWC(speed, temp);
 console.log(buildWC);

 //Get and display wind direction
 let direction = data.current_observation.wind_dir;
 console.log(direction);
 document.getElementById("directionLabel").innerHTML = direction;

 //Call function to change wind direction dial
 windDial(direction);

 //Get current weather condition for weather image, call function
 let weather = data.current_observation.weather;
 console.log(weather);
 let curWeatherImage = getCondition(weather);
 changeSummaryImage(curWeatherImage);

 let conditionImage = data.current_observation.icon_url;
 document.getElementById("cur-weather").src = conditionImage;

 // Task 2 - Populate location information
 //Get and display city and state
 let cityState = data.current_observation.display_location.full;
 console.log(cityState);
 document.getElementById("cityState").innerHTML = cityState;

 //Get and display city for title element
 let pageTitle = data.current_observation.display_location.full;
 console.log(pageTitle);
 document.getElementById("page-title").innerHTML = pageTitle + " Weather";

 //Get and display zip
 let zip = data.current_observation.display_location.zip;
 console.log(zip);
 document.getElementById("zip").innerHTML = zip;

 //Get and display elevation
 let elevation = data.current_observation.display_location.elevation;
 console.log(elevation);
 document.getElementById("elevation").innerHTML = Math.round(elevation * 3.28);

 //Get and display location
 let lat = data.current_observation.display_location.latitude;
 console.log(lat);
 let long = data.current_observation.display_location.longitude;
 console.log(long);
 document.getElementById("location").innerHTML = long + ', ' + lat;

 // Task 3 - Populate weather information and rest of the info (including the wunderground logo and text in footer)
 //Get and display high temp
 const high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit
 console.log(high);
 document.getElementById("high-temp").innerHTML = Math.round(high) + '&deg;F';

 //Get and display low temp
 let low = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
 console.log(low);
 document.getElementById("low-temp").innerHTML = Math.round(low) + '&deg;F';

 //Get and display video title
 let titleVideo = data.current_observation.weather;
 console.log(titleVideo);
 document.getElementById("condition").innerHTML = titleVideo;

 //Get and display weather video Icon
 let videoIcon = data.current_observation.icon_url;
 document.getElementById("condition-icon").src = videoIcon;

 //Get and display wind gusts
 let gust = data.current_observation.wind_gust_mph;
 console.log(gust);
 document.getElementById("gust").innerHTML = gust + " mph";

 // Task 4 - Hide status and show main
 //show and hide status
 const noStatus = document.getElementById("status");
 noStatus.setAttribute("id", "noStatus")
 //show and hide content
 const hide = document.getElementById("hideUnhide");
 hide.setAttribute("class", "notHide");

 //Hourly forecast
 let hourlyTemp = []
 for (let i = 0; i < 24; i++) {
  hourlyTemp[i] = data.hourly_forecast[i].temp.english;
  console.log(hourlyTemp);
 }

 //Display
 let zero = document.getElementById("zero").innerHTML = hourlyTemp[0] + '&deg;F';
 let one = document.getElementById("one").innerHTML = hourlyTemp[1] + '&deg;F';
 let two = document.getElementById("two").innerHTML = hourlyTemp[2] + '&deg;F';
 let three = document.getElementById("three").innerHTML = hourlyTemp[3] + '&deg;F';
 let four = document.getElementById("four").innerHTML = hourlyTemp[4] + '&deg;F';
 let five = document.getElementById("five").innerHTML = hourlyTemp[5] + '&deg;F';
 let six = document.getElementById("six").innerHTML = hourlyTemp[6] + '&deg;F';
 let seven = document.getElementById("seven").innerHTML = hourlyTemp[7] + '&deg;F';
 let eight = document.getElementById("eight").innerHTML = hourlyTemp[8] + '&deg;F';
 let nine = document.getElementById("nine").innerHTML = hourlyTemp[9] + '&deg;F';
 let ten = document.getElementById("ten").innerHTML = hourlyTemp[10] + '&deg;F';
 let eleven = document.getElementById("eleven").innerHTML = hourlyTemp[11] + '&deg;F';
 let twelve = document.getElementById("twelve").innerHTML = hourlyTemp[12] + '&deg;F';
 let thirteen = document.getElementById("thirteen").innerHTML = hourlyTemp[13] + '&deg;F';
 let fourteen = document.getElementById("fourteen").innerHTML = hourlyTemp[14] + '&deg;F';
 let fifteen = document.getElementById("fifteen").innerHTML = hourlyTemp[15] + '&deg;F';
 let sixteen = document.getElementById("sixteen").innerHTML = hourlyTemp[16] + '&deg;F';
 let seventeen = document.getElementById("seventeen").innerHTML = hourlyTemp[17] + '&deg;F';
 let eighteen = document.getElementById("eighteen").innerHTML = hourlyTemp[18] + '&deg;F';
 let nineteen = document.getElementById("nineteen").innerHTML = hourlyTemp[19] + '&deg;F';
 let twenty = document.getElementById("twenty").innerHTML = hourlyTemp[20] + '&deg;F';
 let twentyone = document.getElementById("twentyone").innerHTML = hourlyTemp[21] + '&deg;F';
 let twentytwo = document.getElementById("twentytwo").innerHTML = hourlyTemp[22] + '&deg;F';
 let twentythree = document.getElementById("twentythree").innerHTML = hourlyTemp[23] + '&deg;F';
}

//copy all the stuff from the underground weather site and put it into the json editor online, it will then show me what I actually got. It returns it as a json object and then two sub-objects
//response object we don't really need to worry about, info about the response
//We want the current_observation, that tells use the actually current weather
//let json = getData(location);
//to store info from the json file: let zip = json.current_observation.display_location.zip; (like a file path)

//you can get a list of key words that they use to describe the weather for the background image, under phrase glossary so we now know that what ones we have to account for

//wunderground.com key
//a648268d6c5ab2de

/****search tool assessment - keyup event listener
//want the in javascript, using the addEventListener() method
//object(div).addEventListener("keyup", function);
//only returns 20 results when you start typing
//listening for the click on one of the links from the search bar results
//use the bubbling and capture so that you only have to write one event listener and it works for all of them (add listener to <ul>)
