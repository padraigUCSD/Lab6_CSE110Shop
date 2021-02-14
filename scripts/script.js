// Script.js

const url = "https://fakestoreapi.com/products";
var jsonString;
var jsonObject;
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem("jsonArray") == null){ //array not fetched yet
    //fetch
    fetchJson();
  }
    //console.log(localStorage.getItem("jsonArray"));
    jsonString = localStorage.getItem("jsonArray");
    jsonString = JSON.parse(jsonString);
    console.log(jsonString);

    var page = "eeeeeeeee (todo)";
    for(var i=0; i<20; ++i /* each item in jsonString */){
        console.log(jsonString[i].price);
        var prod = document.createElement('product-item');
        prod.setAttribute('src', jsonString[i].image );
        prod.setAttribute('alt', jsonString[i].description );
        prod.setAttribute('title', jsonString[i].title );
        prod.setAttribute('price', jsonString[i].price );
        document.getElementsByTagName('ul')[0].appendChild(prod);
    }
});

async function fetchJson(){
  let response = await fetch(url);
  let data = await response.json();
  jsonObject = data;
  console.log(jsonObject);

  localStorage.setItem("jsonArray", JSON.stringify(jsonObject)); 
} 