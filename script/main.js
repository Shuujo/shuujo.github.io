const SHOWCASE_IMG = document.getElementById('msi');
const UPDATE_TIME_INTERVAL = 2000;

const imagesArray = [
    'res/portfolio pieces/HomePage/OC 2021.jpg',
    'res/portfolio pieces/HomePage/CoveSoda.jpg',
    'res/portfolio pieces/HomePage/Enter the Demons Den.jpg',
    'res/portfolio pieces/HomePage/Pahang, Josh - Magazine.jpg',
    'res/portfolio pieces/HomePage/Pahang, Josh - Magazine5.jpg'
  ];

// =============== IMAGE POP-UPS ===============
const MAX_POPUPS = 15;
const REPEAT_TIME_INTERVAL = 100;
let popUpBool = true;
var popUpCanvas = document.getElementById("main-pop-ups");
let popUpCounter = 0;


const popUpInterval =  setInterval(function() 
{
    if (popUpCounter > MAX_POPUPS)
    {
        popUpCanvas.firstElementChild.remove();
        popUpCounter--;
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
    

    var randomizer = Math.floor(Math.random() * 5);
    // var randomizer = 5;
    var loop_counter = 1;
    const MARGIN_MULT = '10';

    console.log(randomizer);

    setInterval(function()
    {
        if(randomizer != 0)
        {
            if (popUpCounter > MAX_POPUPS)
            {
                popUpCanvas.firstElementChild.remove();
                popUpCounter--;
            }  

            var popUpCopy = popUpContainer.cloneNode(true);
            popUpCopy.style.marginTop = `${loop_counter * MARGIN_MULT}px`;
            popUpCopy.style.marginLeft = `${loop_counter * MARGIN_MULT}px`;
            
            popUpCanvas.appendChild(popUpCopy);

            loop_counter++;
            popUpCounter++;
            randomizer--;
        }
    }, REPEAT_TIME_INTERVAL);
    popUpCounter++;
    

    
}, UPDATE_TIME_INTERVAL);


// =============== POP UP CLOSE HANDLER ===============
document.addEventListener('click', (event) => {
    if (event.target.matches('.pop-up-close')) 
    {
        event.target.parentElement.parentElement.remove();
        popUpCounter--;
    }
  });

  // =============== ADBLOCKER  HANDLER ===============
document.addEventListener('click', (event) => {
    if (event.target.matches('#main-adblock')) 
    {
        popUpBool = popUpBool ? false : true;
        document.getElementById("main-pop-ups").classList.toggle("hidden");

        if(popUpBool)
        {
            document.getElementById("main-adblock").innerHTML = "disable ads?"
        }
        else
        {
            document.getElementById("main-adblock").innerHTML = "enable ads?"
        }
    }
  });


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