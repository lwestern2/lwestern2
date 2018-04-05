'use strict';

getData();

function getData()
{
 fetch("/acme/js/acme.json")
  .then(response => response.json())
  .then(function (acme) {
  console.log('Json object from getData function:');
  console.log(acme);
  displayNav(acme);
 })
  .catch(error => console.log('There was an error: ', error))
}

function displayNav(acme)
{
 let acmeObjectTitles = ["Anvils", "Explosives", "Decoys", "Traps"];

 let navBar = document.getElementById("acmeNav");
 let navList = "<li><a href=\"\" title=\"Homepage\">Home</a></li>"

 //let length = Object.keys(acme);

 //let i = 0;
 for (let i = 0; i < 4; i++){
  console.log(acmeObjectTitles[i])
  navList += "<li id=\"" + acme[acmeObjectTitles[i]].title + "\" >" + acme[acmeObjectTitles[i]].title + "</li>"

 }

 navBar.innerHTML = navList;

 let anvil = document.getElementById("Anvils");
 let explosives = document.getElementById("Explosives");
 let decoys = document.getElementById("Decoys");
 let traps = document.getElementById("Traps");

 anvil.addEventListener("click", function(){
  display(acme, acmeObjectTitles, i)});
 explosives.addEventListener("click", function(){display(acme, acmeObjectTitles, 1)});
 decoys.addEventListener("click", function(){display(acme, acmeObjectTitles, 2)});
 traps.addEventListener("click", function(){display(acme, acmeObjectTitles, 3)});

}

//Do I need to create event listeners for each nav item?
function display(acme, acmeObjectTitles, i)
{
 let main = document.getElementById("main");
 let productContent = document.getElementById("product_content");

 main.setAttribute("class", "hide");
 productContent.setAttribute("class", "show");

 let name = document.getElementById("product_name");
 let image = document.getElementById("product_image");
 let description = document.getElementById("product_description");
 let manufacturer = document.getElementById("product_manufacturer");
 let review = document.getElementById("product_review");
 let price = document.getElementById("product_price");

 name.innerHTML = acme[acmeObjectTitles[i]].name;
 image.setAttribute("src", acme[acmeObjectTitles[i]].path);
 description.innerHTML = acme[acmeObjectTitles[i]].description;
 manufacturer.innerHTML = acme[acmeObjectTitles[i]].manufacturer;
 review.innerHTML = acme[acmeObjectTitles[i]].reviews;
 price.innerHTML = "Price: $" + acme[acmeObjectTitles[i]].price;

}
