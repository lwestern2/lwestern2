/***************
 *Amce Nav Functions
 *****************/

getData();
//function to populate the navigation on the acme page
function getData() {

 fetch("/acme/js/acme.json")
  .then(response => response.json())
  .then(function (data) {
   console.log('Json object from getData function:');

   processJSON(data);
//   displayData(data);
  })

  .catch(error => console.log('There was an error: ', error))
} // end getData function


function processJSON(data) {
 let options = document.getElementById("acmeNav");
 let navList = "<li><a href=\"\" title=\"Homepage\">Home</a></li>"
 let navDisplay = ["Anvils", "Explosives", "Decoys", "Traps"];

 for (let i = 0; i < navDisplay.length; i++) {
  navList += "<li id=\"" + data[navDisplay[i]].display + "\" >" + data[navDisplay[i]].display + "</li>";
 }

 options.innerHTML = navList;
 console.log(options);
 addEventeListenersToList(data, navDisplay);
}


function addEventeListenersToList(data, navDisplay){
 var anvil = document.getElementById("Anvil");
 var explosive = document.getElementById("Explosives");
 var decoy = document.getElementById("Decoy");
 var trap = document.getElementById("Trap");
 var aux = [anvil, explosive, decoy,trap];
 for (let i = 0; i < aux.length; i++) {
  aux[i].addEventListener("click", function(){show(data, navDisplay, i)});
 }
}


function show(data, navDisplay, i)
{
 toogle();
 let name = document.getElementById("product-name");
 name.innerHTML = data[navDisplay[i]].name;

 let image = document.getElementById("product-image");
 image.setAttribute("src", data[navDisplay[i]].path);

 let description = document.getElementById("product-descrip");
 description.innerHTML = data[navDisplay[i]].description;

 let manufacturer = document.getElementById("man");
 manufacturer.innerHTML = data[navDisplay[i]].manufacturer;

 let review = document.getElementById("review");
 review.innerHTML = data[navDisplay[i]].reviews;

 let price = document.getElementById("product-price");
 price.innerHTML = "Price: $" + data[navDisplay[i]].price;

}
function toogle(){
 let content = document.getElementById("main-content");
 content.setAttribute("class", "hide");

 let productContent = document.getElementById("products");
 productContent.setAttribute("class", "show");
}

 // Build unordered list
 // for loop to get the results
 /*let list = "<ul>";
 for (let i = 0; i < 4; i++) {
  list += "<li>" + data.navarray[i] + "<li>";
 }
 list += "<ul>";*/

 // Display list into the nave section of the web page
 //acmeNav.innerHTML = list;
 // ends the processJSON function

//Display the data from the json file
//function displayData(data) {
// //Anvils
// let title = data.Anvils.name;
// console.log(title);
// document.getElementById("page-title").innerHTML = title + " | Acme.Inc";
//
// let name = data.Anvils.name;
// console.log(name);
// document.getElementById("product-name").innerHTML = name;
//
// let img = data.Anvils.path;
// console.log(img);
// document.getElementById("product-image").src = img;
//
// let descrip = data.Anvils.description;
// console.log(descrip);
// document.getElementById("product-descrip").innerHTML = descrip;
//
// let man = data.Anvils.manufacturer;
// console.log(man);
// document.getElementById("product-man").innerHTML = "Made by: " + man;
//
// let price = data.Anvils.price;
// console.log(price);
// document.getElementById("product-price").innerHTML = "Price: $" + price;
//
// let review = data.Anvils.reviews;
// console.log(review);
// document.getElementById("product-review").innerHTML = "Reviews: " + review + "/5 stars";
//}
