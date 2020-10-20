// select DOM
const weightInput = document.querySelector('.form-control');
const gramOutput = document.querySelector('#GramOutput');
const kgOutput = document.querySelector('#KGOutput');
const ozOutput = document.querySelector('#ozOutput');

// EVENTS 
weightInput.addEventListener('input', getWeight);

// Hidding the converter values initially
document.querySelector('.cards').style.opacity = '0';

// FUNCTIONS 
function getWeight(e) {
  // Checking the value if its empty;
  if (weightInput.value === '') {
    
    // Removing the opacity;
    document.querySelector('.cards').style.opacity = '0';
    return;
  }

  // if its not Empty
  let weight = weightInput.value;

  // Need this line to rerender the weight
  document.querySelector('.cards').style.opacity = '1';

  // Converting it to Gram
  let grams = Math.floor(weight / 0.0022046);

  // Converting it to Kilogram
  let kg = Math.floor(weight / 2.2046);

  // Converting it to Ounds
  let ounce = Math.floor(weight * 16);


  // Appending the value to the webpage
  gramOutput.innerText = grams;
  kgOutput.innerText = kg;
  ozOutput.innerText = ounce;
}