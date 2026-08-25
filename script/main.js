

const SHOWCASE_IMG = document.getElementById('msi');
const UPDATE_TIME_INTERVAL = 2000;

const imagesArray = [
    'res/portfolio pieces/OC 2021.png',
    'res/portfolio pieces/Magazine/Pahang\,\ Josh\ -\ Magazine5.png',
    'res/portfolio pieces/1080x1350.png',
    'res/portfolio pieces/Enter the Demons Den.png',
    'res/portfolio pieces/SunPeel/SunPeel Social Media Ads_Facebook 1080x1350.png',
    'res/portfolio pieces/Magazine/Pahang, Josh - Magazine.png'
  ];

// =============== IMAGE POP-UPS ===============
const MAX_POPUPS = 5;
var popUpCounter = 0;
var popUpCanvas = document.getElementById("main-pop-ups");

setInterval(function() 
{
    if (popUpCounter >= MAX_POPUPS)
    {
        popUpCanvas.firstElementChild.remove();
    }   
    
    var popUpContainer = document.createElement("div");
    popUpContainer.classList.add("pop-up-container");

    // Top Half of Pop Up Ad
    var popUpTopBar = document.createElement("div");
    popUpTopBar.classList.add("pop-up-top-bar");

    var popUpClose = document.createElement("div");
    popUpClose.classList.add("pop-up-close");
    popUpClose.innerHTML = "&#215;"

    popUpTopBar.appendChild(popUpClose);

    // Bottom Half of Pop Up Ad
    var popUpDiv = document.createElement("div");
    popUpDiv.classList.add('pop-up-bottom')
    var popUpWidth = "30vw";
    var popUpHeight = "30vh";
    var screenWidth = screenSizeRandWidth();
    var screenHeight = screenSizeRandHeight();

    popUpDiv.style.width = popUpWidth;
    popUpDiv.style.height = popUpHeight;

    var calcTop = `clamp(0px, calc(${screenHeight}px - ${popUpHeight}), ${window.innerHeight}px)`;
    var calcLeft = `clamp(0px, calc(${screenWidth}px - ${popUpWidth}), ${window.innerWidth}px)`;


    popUpContainer.style.top = calcTop;
    popUpContainer.style.left = calcLeft;

    var imgDiv = document.createElement('img');

    var randomImg = Math.floor(Math.random() * imagesArray.length);
    imgDiv.setAttribute('src', imagesArray[randomImg]);
    imgDiv.classList.add('pop-up-img');

    popUpDiv.appendChild(imgDiv);
    
    popUpContainer.appendChild(popUpTopBar);
    popUpContainer.appendChild(popUpDiv);
    popUpCanvas.appendChild(popUpContainer);
    popUpCounter++;

}, UPDATE_TIME_INTERVAL);






// =============== HEADER CLICK BACK TO INDEX.HTML ===============
document.querySelector('.header-logo').addEventListener('click', function(){
    window.location = "index.html";
})


// =============== CLICK ON IMAGES TO ENLARGE ===============
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) 
{
    if(!images[i].classList.contains("header-logo"))
    {
        images[i].onclick = function()
        {
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            captionText.innerHTML = this.nextElementSibling.innerHTML;
        }
    }
}

function screenSizeRandWidth()
{
    var windowWidth = window.innerWidth;
    return Math.floor(Math.random() * windowWidth);
}

function screenSizeRandHeight()
{
    var windowHeight = window.innerHeight;
    return Math.floor(Math.random() * windowHeight);
}