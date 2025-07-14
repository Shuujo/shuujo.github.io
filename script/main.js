var navButton = document.getElementById("toggle");
var navContainer = document.getElementById("menu");
var links = document.getElementsByClassName("links");

for (var i = 0; i < links.length; i++)     
{
    links[i].addEventListener('click', toggleMenu);
}

navButton.addEventListener('click', toggleMenu);

function toggleMenu()
{
    navContainer.classList.toggle('active');
    navButton.classList.toggle('active');
}