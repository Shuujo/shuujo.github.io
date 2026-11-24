var navToggle = document.getElementsByClassName("nav-toggle")[0];

navToggle.addEventListener("click", toggleNav);

function toggleNav()
{
    document.getElementById("nav").classList.toggle("active");
}