// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
var finalPrice = 160;
let btnpatty=document.getElementById("pattyb")
let btncheese=document.getElementById("cheeseb")
let btntomato=document.getElementById("tomatob")
let btnonions=document.getElementById("onionb")
let btnlettuce=document.getElementById("lettuceb")
// btnpatty.style.backgroundColor="white";
// btnlettuce.style.backgoundColor='#ffffff'
//Initial price of the burger
var wholeWheatBun = 10;
//Ingredients of the burger along with the price
var quantity={
  patty:0,
  cheese: 0,
  tomatoes: 0,
  onions: 0,
  lettuce: 0
}
// quantity.patty++
// console.log(quantity.patty)
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  patty: 80,
  cheese: 10,
  tomatoes: 20,
  onions: 20,
  lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  patty: true,
  cheese: true,
  tomatoes: true,
  onions: true,
  lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.patty) {
    patty.style.display = "inherit";
    quantity.patty++;
    btnpatty.style.backgroundColor="yellow";
    document.getElementById("patty1").innerHTML="Patty"
    } 
    else {
    patty.style.display = "none";
    quantity.patty--;
    document.getElementById("patty1").innerHTML=""
    btnpatty.style.backgroundColor="white";
  }
}1

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.cheese) {
    cheese.style.display = "inherit";
    quantity.cheese++;
    btncheese.style.backgroundColor="yellow";
    document.getElementById("cheese1").innerHTML="Cheese"
    } else
     {
    cheese.style.display = "none";
    quantity.cheese--;
    btncheese.style.backgroundColor="white";
    document.getElementById("cheese1").innerHTML=""
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.tomatoes) {
    quantity.tomatoes++;
    btntomato.style.backgroundColor="yellow";
    tomatoes.style.display = "inherit";
    document.getElementById("tomato1").innerHTML="Tomatoes"
  } 
  else {
    tomatoes.style.display = "none";
    quantity.tomatoes--;
    btntomato.style.backgroundColor="white";
      document.getElementById("tomato1").innerHTML=""
  }
}

//Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
function renderOnions() {
  let onions = document.querySelector("#onion");
  //you can also use getElementById
  if (state.onions) {
    onions.style.display = "inherit";
    quantity.onions++;
    btnonions.style.backgroundColor="yellow";
    document.getElementById("onion1").innerHTML="Onion"
    } 
    else {
    onions.style.display = "none";
    quantity.onions--;
    btnonions.style.backgroundColor="white";
    document.getElementById("onion1").innerHTML=""
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.lettuce) {
    lettuce.style.display = "inherit";
    btnlettuce.style.backgoundColor='#ffffff'
    quantity.lettuce++;
    btnlettuce.style.backgroundColor="yellow";
    document.getElementById("lettuce1").innerHTML="Lettuce"

  } else {
    lettuce.style.display = "none";
    quantity.lettuce--;
    btnlettuce.style.backgroundColor="white";
    document.getElementById("lettuce1").innerHTML=""
  }
}


document.querySelector(".btn-patty").onclick = function () {
  state.patty = !state.patty;
   if(patty.style.display == "none"){
    finalPrice-=-80
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  else{
    finalPrice+=-80
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.cheese = !state.cheese;
   if(cheese.style.display == "none"){
    finalPrice-=-10
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  else{
    finalPrice+=-10
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.tomatoes = !state.tomatoes;
   if(tomato.style.display == "none"){
    finalPrice-=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  else{
    finalPrice+=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.onions = !state.onions;
   if(onion.style.display == "none"){
    finalPrice-=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  else{
    finalPrice+=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.lettuce = !state.lettuce;
  if(lettuce.style.display == "none"){
    finalPrice-=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  else{
    finalPrice+=-20
    document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  }
  document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;
  renderAll();
};
//Challenge 1 - Add/Remove the class active to the buttons based on state

//Challenge 2 - Render only the items selected in the ingredients board based on the state
// for(let i=0;i<state.length;i++){
//   if(state.i==true)
//   {
//     finalPrice+=ingredients.i;
//     console.log(ingredients.i)
//   }
// }
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

document.getElementById("price-details").innerHTML=finalPrice+wholeWheatBun;

 





