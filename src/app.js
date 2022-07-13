// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
var total =150;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
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
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");

  if (state.Cheese) {
    cheese.style.display = "block";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById("tomato");

  if (state.Tomatoes == true) {
    tomato.style.display = "block";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let oni = document.getElementById("onion");

  if (state.Onions == true) {
    oni.style.display = "block";
  } else {
    oni.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "block";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick =  ()=> {
  state.Patty = !state.Patty;
 
 renderPattyInIngredient()
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = ()=> {
  state.Cheese = !state.Cheese;
  renderCheeseInIngredient();
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = ()=> {
  state.Tomatoes = !state.Tomatoes;
  renderTomatoInIngredient();
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = ()=> {
  state.Onions = !state.Onions;
renderOnionInIngredient();
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick =  () =>{
  state.Lettuce = !state.Lettuce;
renderLettuceInIngredient();
  renderAll();
  
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderPattyInIngredient(){
  if(!state.Patty){
  document.getElementById("ingr_patty").style.display='none';
  document.querySelector(".btn-patty").classList.remove('active')
 total = total-ingredients.Patty;
  }
  else{
  document.getElementById("ingr_patty").style.display='block';
  document.querySelector(".btn-patty").classList.add('active')
 total = total+ingredients.Patty;
  }
 calculate_price();
}
function renderCheeseInIngredient(){
  if(!state.Cheese){
  document.getElementById("ingr_chesse").style.display='none';
  document.querySelector('.btn-cheese').classList.remove('active');
  total = total-ingredients.Cheese;
  }
  else{
  document.getElementById("ingr_chesse").style.display='block';
 document.querySelector('.btn-cheese').classList.add('active');
total = total+ingredients.Cheese;
  }
calculate_price();
}


function renderTomatoInIngredient(){
  if(!state.Tomatoes){
  document.getElementById("ingr_tomato").style.display='none';
  document.querySelector('.btn-tomatoes').classList.remove('active');
   total = total-ingredients.Tomatoes;
  }
  else{
  document.getElementById("ingr_tomato").style.display='block';
  document.querySelector('.btn-tomatoes').classList.add('active');
 total = total+ingredients.Tomatoes;
  }
  calculate_price();
}
function renderOnionInIngredient(){
  if(!state.Onions){
  document.getElementById("ingr_onion").style.display='none';
  document.querySelector('.btn-onions').classList.remove('active');
   total = total-ingredients.Onions;
  }
  else{
  document.getElementById("ingr_onion").style.display='block';
  document.querySelector('.btn-onions').classList.add('active');
 total = total+ingredients.Onions;
  }
   calculate_price();
}

function renderLettuceInIngredient(){
  if(!state.Lettuce){
  document.getElementById("ingr_lettuce").style.display='none';
  document.querySelector('.btn-lettuce').classList.remove('active');
  total = total-ingredients.Lettuce;
  }
  else{
  document.getElementById("ingr_lettuce").style.display='block';
  document.querySelector('.btn-lettuce').classList.add('active');
  total = total+ingredients.Lettuce;
  }
calculate_price();
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
const calculate_price = ()=>{
  var finalPrice = total+wholeWheatBun;
  document.getElementById("INR").innerHTML='INR '+finalPrice;
  
}