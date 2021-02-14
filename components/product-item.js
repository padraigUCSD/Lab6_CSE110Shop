// product-item.js

class ProductItem extends HTMLElement {

  constructor(){
    super(); //always call super first

    const template = document.createElement('template');
    template.innerHTML = `
    <li class="product">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
      <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      <p class="price">$109.95</p>
      <button onclick="alert('Added to Cart!')">Add to Cart</button>
    </li>
    <style>
      .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    </style>
    `;

    this.root = this.attachShadow({ mode: "open" });

    this.root.appendChild(template.content.cloneNode(true));

  }
  

  //allows for parametric control by attribute
  attributeChangedCallback(attrName, oldVal, newVal){
    let shadow = this.shadowRoot;
    let childNodes = shadow.childNodes;
    let list = childNodes[1];
    
    // (1) img src
    if(attrName == 'src'){
      console.log(list.childNodes[1]); //img tag
      list.childNodes[1].setAttribute('src', newVal);
      
    }
    // (2) img alt
    else if(attrName == 'alt'){
      console.log(list.childNodes[1]); //img tag
      list.childNodes[1].setAttribute('alt', String(newVal));

    }
    // (3A) p txt - title
    else if(attrName == 'title'){
      list.childNodes[3].textContent = String(newVal);     
      
    }
    // (3B) p txt - price
    else if(attrName == 'price'){
      //console.log(list.childNodes[5]); // p price tag
      list.childNodes[5].textContent = String(newVal); 

    }
  }
  
  // which attributes to add a change listener for,
  // for attributeChangedCallback
  static get observedAttributes() {
    return ['src', 'alt', 'title', 'price'];
  }

  //TYPERS AND MEMERS CAN PROCEED BELOW
  get src(){
    return this.getAttribute('src');
  }
  
  set src(newValue){
    this.setAttribute('src', newValue);
  }
  
  get alt(){
    return this.getAttribute('alt');
  }

  set alt(newValue){
    this.setAttribute('alt', newValue);
  }

  get title(){
    return this.getAttribute('title');
  }

  set title(newValue){
    this.setAttribute('title', newValue);
  }

  get price(){
    return this.getAttribute('price');
  }

  set price(newValue){
    this.setAttribute('price', newValue);
  }


  connectedCallback(){
    
  }
  //NO TYPING OR MEMEING BEYOND THIS POINT
}
customElements.define('product-item', ProductItem);