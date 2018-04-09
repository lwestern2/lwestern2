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

   buildNav(data);
  })

  .catch(error => console.log('There was an error: ', error))
} // end getData function

function buildNav(data) {

 for (let i = 0; i < data.Navigation.length; i++) {
  let navList = "<li> ";
  //"<a href=" + "'/acme/index.html' title='#'>" + data.Navigation[i] + "</a>";
  let link = "<a href=" + "'/acme/index.html' title=" + data.Navigation[i] + ">" + data.Navigation[i] + "</a>";

  navList += link + "</li>";
  console.log(navList);

  let ul = document.getElementById('nav');
  ul.innerHTML += navList;
 }


 const LIST = document.getElementById('nav');

 LIST.addEventListener("click", function (event) {
  let linkClicked = event.target.innerHTML;
  event.preventDefault();
  console.log(linkClicked);

  if (linkClicked == "Home") {
   document.getElementById("page-title").innerHTML = "Home | Acme.Inc";

   //show home page, hide content pages
   document.getElementById("main-content").setAttribute("class", "show");
   document.getElementById("products").setAttribute("class", "hide");
  } else if (linkClicked == "Anvils") {
   document.getElementById("page-title").innerHTML = "Anvils | Acme.Inc";

   //hide the home page, show content page
   document.getElementById("main-content").setAttribute("class", "hide");
   document.getElementById("products").setAttribute("class", "show");

   //populate content page using the json file
   document.getElementById("product-name").innerHTML = data.Anvils.name;

   document.getElementById("product-image").setAttribute("src", data.Anvils.path);

   document.getElementById("product-descrip").innerHTML = data.Anvils.description;

   document.getElementById("man").innerHTML = data.Anvils.manufacturer;

   document.getElementById("review").innerHTML = data.Anvils.reviews + "/5 stars";

   document.getElementById("product-price").innerHTML = "Price: $" + data.Anvils.price;
  } else if (linkClicked == "Explosives") {
   document.getElementById("page-title").innerHTML = "Explosives | Acme.Inc";

   //hide the home page, show content page
   document.getElementById("main-content").setAttribute("class", "hide");
   document.getElementById("products").setAttribute("class", "show");

   //populate content page using the json file
   document.getElementById("product-name").innerHTML = data.Explosives.name;

   document.getElementById("product-image").setAttribute("src", data.Explosives.path);

   document.getElementById("product-descrip").innerHTML = data.Explosives.description;

   document.getElementById("man").innerHTML = data.Explosives.manufacturer;

   document.getElementById("review").innerHTML = data.Explosives.reviews + "/5 stars";

   document.getElementById("product-price").innerHTML = "Price: $" + data.Explosives.price;
  } else if (linkClicked == "Decoys") {
   document.getElementById("page-title").innerHTML = "Decoys | Acme.Inc";

   //hide the home page, show content page
   document.getElementById("main-content").setAttribute("class", "hide");
   document.getElementById("products").setAttribute("class", "show");

   //populate content page using the json file
   document.getElementById("product-name").innerHTML = data.Decoys.name;

   document.getElementById("product-image").setAttribute("src", data.Decoys.path);

   document.getElementById("product-descrip").innerHTML = data.Decoys.description;

   document.getElementById("man").innerHTML = data.Decoys.manufacturer;

   document.getElementById("review").innerHTML = data.Decoys.reviews + "/5 stars";

   document.getElementById("product-price").innerHTML = "Price: $" + data.Decoys.price;
  } else if (linkClicked == "Traps") {
   document.getElementById("page-title").innerHTML = "Traps | Acme.Inc";

   //hide the home page, show content page
   document.getElementById("main-content").setAttribute("class", "hide");
   document.getElementById("products").setAttribute("class", "show");

   //populate content page using the json file
   document.getElementById("product-name").innerHTML = data.Traps.name;

   document.getElementById("product-image").setAttribute("src", data.Traps.path);

   document.getElementById("product-descrip").innerHTML = data.Traps.description;

   document.getElementById("man").innerHTML = data.Traps.manufacturer;

   document.getElementById("review").innerHTML = data.Traps.reviews + "/5 stars";

   document.getElementById("product-price").innerHTML = "Price: $" + data.Traps.price;
  }

 })
};



//function show(data, navDisplay, i)
//{
// toogle();
// let name = document.getElementById("product-name");
// name.innerHTML = data[navDisplay[i]].name;
//
// let image = document.getElementById("product-image");
// image.setAttribute("src", data[navDisplay[i]].path);
//
// let description = document.getElementById("product-descrip");
// description.innerHTML = data[navDisplay[i]].description;
//
// let manufacturer = document.getElementById("man");
// manufacturer.innerHTML = data[navDisplay[i]].manufacturer;
//
// let review = document.getElementById("review");
// review.innerHTML = data[navDisplay[i]].reviews;
//
// let price = document.getElementById("product-price");
// price.innerHTML = "Price: $" + data[navDisplay[i]].price;
//
//}
//function toogle(){
// let content = document.getElementById("main-content");
// content.setAttribute("class", "hide");
//
// let productContent = document.getElementById("products");
// productContent.setAttribute("class", "show");
//}
