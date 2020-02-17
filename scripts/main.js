
//Logo Switcher


let logos = document.querySelector('img');
logos.onclick = function()
{
  let logoSrc = logos.getAttribute('src');
  if (logoSrc === 'images/cba-logo.png')
  {
    logos.setAttribute('src', 'images/kvh-logo.png');
  }
  else
  {
    logos.setAttribute('src', 'images/cba-logo.png');
  }
}





//Custom Greeting


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName()
{
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName)
  myHeading.textContent = 'Greetings, ' + myName;
}

if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  let storedName = localStorage.getItem('name');
  myHeading.textConten = 'Greetings, ' + storedName;
}

myButton.onclick = function()
{
  setUserName();
}
