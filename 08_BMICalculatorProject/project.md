# Project related to DOM

## Project link
[click here](https://stackbliz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 2

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  let bmi;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

  if (bmi < 18.6) {
    results.innerHTML = `BMI Result Is ${bmi} which is in under weight`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML = ` BMI Result Is ${bmi} which is in Normal Range`;
  } else {
    results.innerHTML = `BMI Result Is ${bmi} which is OverWeight`;
  }
});
```