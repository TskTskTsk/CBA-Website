//Logo Switcher
let logos = document.querySelector('img');
logos.onclick = function() {
  let logoSrc = logos.getAttribute('src');
  if (logoSrc === 'images/cba-logo.png') {
    logos.setAttribute('src', 'images/kvh-logo.png');
  } else {
    logos.setAttribute('src', 'images/cba-logo.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Greetings, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Greetings, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
