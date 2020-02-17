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
