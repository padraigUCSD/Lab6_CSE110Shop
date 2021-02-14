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
});

async function fetchJson(){
  let response = await fetch(url);
  let data = await response.json();
  jsonObject = data;
  console.log(jsonObject);

  localStorage.setItem("jsonArray", JSON.stringify(jsonObject)); 
} 