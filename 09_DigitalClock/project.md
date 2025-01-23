# Project related to DOM

## Project link
[click here](https://stackbliz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 3

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```