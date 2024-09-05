let selectedData = {}

function openCity(event, cityName) {
 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
   
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(cityName).style.display = "block";
  event.currentTarget.className += " activeTab";


  selectedData = foodData[cityName];
  resetCumulativeTotals()

}
window.onload = function() {
  // Simulate a click on the first tab
  document.getElementsByClassName('tablinks')[0].click();
}



function resetCumulativeTotals() {
  for (var key in cumulativeTotals) {
    if (cumulativeTotals.hasOwnProperty(key)) {
      cumulativeTotals[key] = 0;
      const spanElement = document.querySelectorAll(`.nutrition-facts-${key.toLowerCase()}`);
        spanElement.forEach(spanElement => {
        if (spanElement) {
          // addClassToProteinButtons(buttonValue)
          spanElement.textContent =  cumulativeTotals[key];
        }
        });

    }
  }
}







// script.js
function toggleCalculator() {
  const calculator = document.getElementById('calculator');
  const firstCalculator = document.getElementById('first-calculator');
  const toggleButton = document.querySelector('.toggle-button');
 
  if (calculator.style.display === 'none' || calculator.style.display === '') {
    calculator.style.display = 'block';
    toggleButton.style.display = 'none';
    firstCalculator.style.display = 'none';
  } else {
    calculator.style.display = 'none';
    toggleButton.style.display = 'block'; // Change button text to indicate opening
    firstCalculator.style.display = 'block';
  }
}

function Xmark() {
  const calculator = document.getElementById('calculator');
  const firstCalculator = document.getElementById('first-calculator');
  const toggleButton = document.querySelector('.toggle-button');
 
  if (calculator.style.display === 'block') {
    calculator.style.display = 'none';
    toggleButton.style.display = 'block';
    firstCalculator.style.display = 'flex';
  } else {
    calculator.style.display = 'block';
    toggleButton.style.display = 'none'; // Change button text to indicate opening
    firstCalculator.style.display = 'none';
  }

}


// json Data
let foodData = {
  Burrito : {
    brownRice: {serving: 10, calories: 30, fat: 15, satfat: 5, trans: 1, cholesterol: 25, sodium: 40, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
    CilantroRice: {serving: 75, calories: 50, fat: 50, satfat: 55, trans: 0, cholesterol: 75, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 29, va: 54, vc: 25, calcium: 52, iron: 34},
    Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
    BeefBarbacoa: {serving: 16, calories: 60, fat: 56, satfat: 0, trans: 98, cholesterol: 75, sodium: 67, carbs: 7, fiber: 6, sugar: 14, protein: 42, va: 14, vc: 4, calcium: 5, iron: 15},
    Steak: {serving: 10, calories: 55, fat: 15, satfat: 55, trans: 15, cholesterol: 67, sodium: 0, carbs: 17, fiber: 17, sugar: 19, protein: 29, va: 0, vc: 16, calcium: 62, iron: 11},
    Shrimp: {serving: 10, calories: 60, fat: 15, satfat: 65, trans: 16, cholesterol: 65, sodium: 60, carbs: 16, fiber: 17, sugar: 16, protein: 62, va: 15, vc: 0, calcium: 52, iron: 15},
    Chorizo: {serving: 50, calories: 60, fat: 42, satfat: 55, trans: 10, cholesterol: 75, sodium: 64, carbs: 1, fiber: 4, sugar: 41, protein: 46, va: 1, vc: 14, calcium: 42, iron: 15},
    plantBased: {serving: 4, calories: 50, fat: 15, satfat: 55, trans: 15, cholesterol: 75, sodium: 6, carbs: 16, fiber: 14, sugar: 13, protein: 26, va: 15, vc: 15, calcium: 62, iron: 15},
    Chicken: {serving: 10, calories: 50, fat: 15, satfat: 55, trans: 4, cholesterol: 45, sodium: 20, carbs: 1, fiber: 0, sugar: 0, protein: 26, va: 15, vc: 16, calcium: 62, iron: 16},
    porkCarnitas: {serving: 10, calories: 20, fat: 15, satfat: 55, trans: 51, cholesterol: 55, sodium: 60, carbs: 0, fiber: 61, sugar: 1, protein: 26, va: 1, vc: 51, calcium: 52, iron: 45},
    ChipotleBeans: {serving: 10, calories: 25, fat: 15, satfat: 56, trans: 1, cholesterol: 65, sodium: 60, carbs: 61, fiber: 61, sugar: 1, protein: 66, va: 1, vc: 1, calcium: 52, iron: 15},
    PintoBeans: {serving: 10, calories: 50, fat: 14, satfat: 54, trans: 1, cholesterol: 35, sodium: 46, carbs: 71, fiber: 0, sugar: 1, protein: 0, va: 61, vc: 16, calcium: 62, iron: 16},
    FajitaVeggies: {serving: 20, calories: 30, fat: 16, satfat: 5, trans: 1, cholesterol: 75, sodium: 46, carbs: 61, fiber: 16, sugar: 1, protein: 26, va: 14, vc: 13, calcium: 23, iron: 35},
    PicoDeGallo: {serving: 70, calories: 50, fat: 15, satfat: 55, trans: 15, cholesterol: 55, sodium: 30, carbs: 51, fiber: 15, sugar: 15, protein: 56, va: 15, vc: 14, calcium: 32, iron: 36},
    Salsa: {serving: 6, calories: 50, fat: 15, satfat: 56, trans: 1, cholesterol: 65, sodium: 60, carbs: 14, fiber: 1, sugar: 14, protein: 26, va: 13, vc: 14, calcium: 32, iron: 52},
    Guac: {serving: 10, calories: 30, fat: 34, satfat: 46, trans: 13, cholesterol: 75, sodium: 65, carbs: 14, fiber: 13, sugar: 14, protein: 46, va: 3, vc: 4, calcium: 32, iron: 12},
    Pickles: {serving: 10, calories: 30, fat: 44, satfat: 46, trans: 13, cholesterol: 18, sodium: 65, carbs: 14, fiber: 13, sugar: 14, protein: 46, va: 3, vc: 4, calcium: 32, iron: 12},
    onions: {serving: 10, calories: 64, fat: 34, satfat: 46, trans: 13, cholesterol: 35, sodium: 65, carbs: 14, fiber: 13, sugar: 14, protein: 46, va: 3, vc: 4, calcium: 32, iron: 12},
    Tomatoes: {serving: 10, calories: 30, fat: 54, satfat: 46, trans: 13, cholesterol: 45, sodium: 65, carbs: 14, fiber: 13, sugar: 14, protein: 46, va: 3, vc: 4, calcium: 32, iron: 12},
    Corn: {serving: 10, calories: 650, fat: 24, satfat: 46, trans: 13, cholesterol: 55, sodium: 65, carbs: 14, fiber: 13, sugar: 14, protein: 46, va: 3, vc: 4, calcium: 32, iron: 12},
    Cilantro: {serving: 10, calories: 50, fat: 44, satfat: 46, trans: 3, cholesterol: 75, sodium: 65, carbs: 1, fiber: 3, sugar: 14, protein: 6, va: 3, vc: 4, calcium: 2, iron: 12},
    jalapeno: {serving: 40, calories: 0, fat: 14, satfat: 46, trans: 34, cholesterol: 75, sodium: 6, carbs: 14, fiber: 33, sugar: 4, protein: 6, va: 3, vc: 43, calcium: 32, iron: 1},
    BurritoSauce: {serving: 0, calories: 30, fat: 1, satfat: 46, trans: 4, cholesterol: 75, sodium: 36, carbs: 14, fiber: 33, sugar: 43, protein: 36, va: 33, vc: 3, calcium: 3, iron: 13},
    sourCream: {serving: 0, calories: 30, fat: 1, satfat: 36, trans: 4, cholesterol: 75, sodium: 36, carbs: 34, fiber: 33, sugar: 4, protein: 43, va: 3, vc: 3, calcium: 34, iron: 1},
    MontereyCheese: {serving: 0, calories: 3, fat: 1, satfat: 3, trans: 46, cholesterol: 5, sodium: 6, carbs: 4, fiber: 3, sugar: 4, protein: 6, va: 3, vc: 4, calcium: 2, iron: 1},
    SmokySauce: {serving: 0, calories: 33, fat: 1, satfat: 32, trans: 46,cholesterol: 5, sodium: 6, carbs: 4, fiber: 33, sugar: 4, protein: 43, va: 3, vc: 32, calcium: 4, iron: 56,},
 },
 Tacos :{
  brownRice1: {serving: 110, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  CilantroRice1: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  Romaine1: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
 Quesadilla :{
  // brownRice: {serving: 100, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  // CilantroRice: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  // Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
 Forkids:{
  // brownRice: {serving: 100, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  // CilantroRice: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  // Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
 Sides :{
  // brownRice: {serving: 100, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  // CilantroRice: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  // Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
 Desserts :{
  // brownRice: {serving: 100, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  // CilantroRice: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  // Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
 Drinks :{
  // brownRice: {serving: 100, calories: 250, fat: 15, satfat: 5, trans: 1, cholesterol: 75, sodium: 60, carbs: 1, fiber: 1, sugar: 1, protein: 26, va: 1, vc: 1, calcium: 2, iron: 15 },
  // CilantroRice: {serving: 75, calories: 50, fat: 150, satfat: 55, trans: 0, cholesterol: 175, sodium: 20, carbs: 13, fiber: 12, sugar: 15, protein: 129, va: 154, vc: 125, calcium: 252, iron: 134},
  // Romaine: {serving: 10, calories: 20, fat: 15, satfat: 56, trans: 16, cholesterol: 57, sodium: 40, carbs: 14, fiber: 14, sugar: 0, protein: 96, va: 0, vc: 9, calcium: 82, iron: 17,},
 },
}




let cumulativeTotals = {
  serving: 0,
  calories: 0,
  fat: 0,
  satfat: 0,
  trans: 0,
  cholesterol: 0,
  sodium: 0,
  carbs: 0,
  fiber: 0,
  sugar: 0,
  protein: 0,
  va: 0,
  vc: 0,
  calcium: 0,
  iron: 0,
};






// addClass to second function second type button

function addClassToToppingsButtons(getValue) {
  const buttons = document.querySelectorAll('#Toppings');
 
    buttons.forEach(button => {
    if (button.value === getValue) {
      button.classList.toggle('active');
      }
   });
 }


 let lastClickedButton = {};
// addClass to second function first type button
function addClassToProteinButtons(getValue, currentArrayName){
  let buttons = document.querySelectorAll('#Protein');

  // Remove 'active' class from the last clicked button in the current group
  if (lastClickedButton[currentArrayName]) {  
    lastClickedButton[currentArrayName].classList.remove('active');
  }

  // Add 'active' class to the button with the matching value
  buttons.forEach(button => {
    if (button.value === getValue) {

      button.classList.add('active');
      lastClickedButton[currentArrayName] = button; // Update the last clicked button
     
    }
  });
}



function showNextGroup(currentGroupId, nextGroupId) {
  var currentGroup = document.getElementById(currentGroupId);
  var nextGroup = document.getElementById(nextGroupId);
 
  if (currentGroup) {
    currentGroup.classList.add('show');
  }

  if (nextGroup) {
    nextGroup.classList.add('show');
    nextGroup.scrollIntoView({ behavior: 'smooth' });
  }
}




// first function json fetch

function jsonFetch(getValue,currentGroupId, nextGroupId) {
  let burritoProtien = ["brownRice", "CilantroRice", "Romaine", "BeefBarbacoa", "Steak", "Shrimp", "Chorizo", "plantBased", "Chicken", "porkCarnitas", "ChipotleBeans", "PintoBeans", "FajitaVeggies","brownRice1", "CilantroRice1", "Romaine1"];

  showNextGroup(currentGroupId, nextGroupId)
      
    const keys = Object.keys(selectedData);
    for (let i = 0; i < keys.length; i++) {
      const ingredientName = keys[i];
 
      if (ingredientName === getValue) {
        const ingredientJSON = selectedData[ingredientName];
        if (burritoProtien.includes(getValue)) {
          // console.log(ingredientJSON);
          burritoIngredients(ingredientJSON, getValue);
        } else {
          viewMenu(ingredientJSON, getValue);
        }
      }
    }  
}


// second function ka child function

let allArray = {
  selectBase: ["brownRice", "CilantroRice", "Romaine"],
  selectToppings: ["BeefBarbacoa", "Steak", "Shrimp", "Chorizo", "plantBased", "Chicken", "porkCarnitas"],
  selectFillings: ["ChipotleBeans", "PintoBeans", "FajitaVeggies"],
  selectBase1: ["brownRice1", "CilantroRice1", "Romaine1"],
};

let previousArrayName = null;
function burritoIngredientsChildFun(buttonValue) {
  // let isValueInArray = false;
  let currentArrayName = null;
  for (let key in allArray) {
    if (allArray.hasOwnProperty(key)) {
      const array = allArray[key];
      // console.log(array);
      if (array.includes(buttonValue)) {
        currentArrayName = key;
        break;
      }
    }
  }
  return {currentArrayName};
}


// second function first type button
let selectedValues = {} ;
function burritoIngredients(burritoButton, buttonValue ) {


  const {currentArrayName} = burritoIngredientsChildFun(buttonValue);
   
  if (!selectedValues[currentArrayName]) {
    selectedValues[currentArrayName] = {};
  }

  for (let key in burritoButton) {
    if (burritoButton.hasOwnProperty(key)) {
      const newValue = burritoButton[key];
     
      if (selectedValues[currentArrayName][key] !== undefined) {
        cumulativeTotals[key] -= selectedValues[currentArrayName][key];
      }
       // Add the new value to the cumulative totals
      //  console.log(cumulativeTotals[key]);
       cumulativeTotals[key] += newValue;
        console.log(newValue);

        const spanElement = document.querySelectorAll(`.nutrition-facts-${key.toLowerCase()}`);
        spanElement.forEach(spanElement => {
        if (spanElement) {
          // addClassToProteinButtons(buttonValue)
          spanElement.textContent =  cumulativeTotals[key];

        }
        });

      // Store the new value as the previous value for next time
 
      selectedValues[currentArrayName][key] = newValue;
      // console.log(newValue);
      
    }
  }
  addClassToProteinButtons(buttonValue, currentArrayName);
}




// second function second type button
let isToggled = {}

function viewMenu(nutritionMenu , buttonValue) {

  if (!isToggled.hasOwnProperty(buttonValue)) {
    isToggled[buttonValue] = false; // Initialize if not present
  }
 
  for (let key in nutritionMenu) {
    if (nutritionMenu.hasOwnProperty(key) && cumulativeTotals.hasOwnProperty(key)){

      const value = nutritionMenu[key];

      if (isToggled[buttonValue]) {
        cumulativeTotals[key] -= value; // Subtract the value if toggled
        addClassToToppingsButtons(buttonValue)
      } else {
        cumulativeTotals[key] += value; // Add the value if not toggled
        addClassToToppingsButtons(buttonValue)
       
      }
      const spanElement = document.querySelectorAll(`.nutrition-facts-${key.toLowerCase()}`);
      spanElement.forEach(spanElement => {
      if (spanElement) {
        spanElement.textContent = cumulativeTotals[key];
       
      }
     });
    }
  }
  isToggled[buttonValue] = !isToggled[buttonValue];  
}



// convert to different size.

let currentSize = "small";

const multipliers = {
  small: 1,
  regular: 2,
  large: 3,
  bowl: 2,
};

function largeSize(newSize) {
  const currentMultiplier = multipliers[currentSize];
  const newMultiplier = multipliers[newSize];
  
    // console.log(selectedValues);
    console.log(cumulativeTotals);

    for (let key in cumulativeTotals) {
      if (cumulativeTotals.hasOwnProperty(key)) {

        cumulativeTotals[key] = (cumulativeTotals[key] / currentMultiplier) * newMultiplier;
        
 



        const spanElement = document.querySelectorAll(`.nutrition-facts-${key.toLowerCase()}`);
        spanElement.forEach(spanElement => {
        if (spanElement) {
           spanElement.textContent = cumulativeTotals[key];
         }
        });
         
        
      }
  }

 
    let updatedIngredients = {};
 
    for (let ingredient in selectedData) {
      if (selectedData.hasOwnProperty(ingredient)) {
        const baseValues = selectedData[ingredient];
        let updatedValues = {};
 
        for (let key in baseValues) {
          if (baseValues.hasOwnProperty(key)) {
            const baseValue = baseValues[key];
            const newValue = (baseValue / currentMultiplier) * newMultiplier;
            updatedValues[key] = newValue;
          }
        }
        updatedIngredients[ingredient] = updatedValues;
      }
    }
 
    // Toggle the class on the buttons
    selectedData = updatedIngredients;
    currentSize = newSize;
}






