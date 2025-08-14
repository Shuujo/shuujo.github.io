const mainDocument = document.getElementById('mainBody');
const loadingSection = document.getElementById('loadingSection');
const alertSection = document.getElementById('alertSection');
const navButton = document.getElementById("toggle");
const navContainer = document.getElementById("menu");
const links = document.getElementsByClassName("links");
const weatherApiKey = "54185ea4ad3f718e71c4dac1f524c96c";

let weatherCard = "";

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

function sectionTransition(theme)
{
    if (theme == 'dark')
    {
        localStorage.setItem("root_theme", "dark");
        mainDocument.style.backgroundColor = 'black';
        mainDocument.setAttribute('data-theme', 'dark');
        document.getElementById('headerLogo').setAttribute('src', 'res/ShuujoEyeLogoDarkMode.png');
        document.getElementById('header').setAttribute('data-theme','dark');
        loadingSection.classList.add('sectionLeaving');
    }
    else if (theme == 'light')
    {
        localStorage.setItem("root_theme", "light");
        mainDocument.style.backgroundColor = 'white';
        mainDocument.setAttribute('data-theme', 'light');
        document.getElementById('header').setAttribute('data-theme','light');
        loadingSection.classList.add('sectionLeaving');
    }
    console.log(localStorage.getItem("root_theme"));
    localStorage.setItem("root_completed", "yes");
}

function removeChildrenFunction()
{
    // Removes all Children in the loadingSection 'section'
    while(loadingSection.firstChild)
    {
        loadingSection.removeChild(loadingSection.firstChild);
    }
    loadingSection.className = '';
}

function changeIteration(iteration)
{
    //First Iteration
    switch (iteration)
    {
        case "first":
            if (loadingSection.children[0].tagName == 'IMG' && loadingSection.getAttribute("class") == 'logoLoading')
            {
                loadingSection.children[0].classList.add('logoLeaving');
            }
            setTimeout(removeChildrenFunction, 2000);
            setTimeout(loadTextCard, 2000);
            // changeIteration('location');
            break;
        
        // Changes to the Theme Choosing Page
        case "theme":
            setTimeout(loadThemeSection, 2000);
            break;
        
        // Changes to the Weather asking Page
        case "location":
            setTimeout(removeChildrenFunction, 2000);
            setTimeout(loadWeatherSection, 2000);
            break;

        // Changes to Homepage in Light Theme
        case "light":
            removeChildrenFunction();
            sectionTransition('light');
            loadHeader('light');
            setTimeout(loadHeroContent, 1000);
            break;

        // Changes to Homepage in Dark Theme
        case "dark":
            removeChildrenFunction();   
            sectionTransition('dark');
            loadHeader('dark');
            setTimeout(loadHeroContent, 1000);
            break;
        default:
            break;
    }
}

function loadHeader()
{
    document.getElementById('header').setAttribute('style','display: flex;');
    document.getElementById('header').classList.add('headerLoading');
}

function loadPage()
{
    console.log(localStorage.getItem("root_theme"));
    loadTheme(localStorage.getItem("root_theme"));
    loadHeader();
}

function loadTheme(theme)
{
    if (theme == 'dark')
        {
            localStorage.setItem("root_theme", "dark");
            mainDocument.setAttribute('data-theme', 'dark');
            document.getElementById('headerLogo').setAttribute('src', 'res/ShuujoEyeLogoDarkMode.png');
            document.getElementById('header').setAttribute('data-theme','dark');
            document.getElementById('loadingSection').setAttribute('data-theme','dark');
        }
        else if (theme == 'light')
        {
            localStorage.setItem("root_theme", "light");
            mainDocument.setAttribute('data-theme', 'light');
            document.getElementById('header').setAttribute('data-theme','light');
            document.getElementById('loadingSection').setAttribute('data-theme','light');
        }
}

function loadThemeSection()
{
    const bgColorDiv = createHtmlElement("div", ['sectionTransition'], 'bgColor', "");
    const animDiv = createHtmlElement("div", null, 'animDiv', "");
    
    // Theme Chooser
    const themeChooserSection = createHtmlElement("section", ["themeChooser"], '', "");
    const lightThemeDiv = createHtmlElement("div", ['textHover'], '', "light");
    lightThemeDiv.setAttribute("onmouseenter","switchTheme('light')");
    lightThemeDiv.setAttribute("onclick", "changeIteration('light')");

    const darkThemeDiv = createHtmlElement("div", ['textHover'], '', "dark");
    darkThemeDiv.setAttribute("onmouseenter","switchTheme('dark')");
    darkThemeDiv.setAttribute("onclick", "changeIteration('dark')");

    // Add TextContainers
    const textContainer = createHtmlElement("div", ['textContainer'], '',"");
    const textReader = createHtmlElement("p", ['textReader'],'','select a theme'); 

    themeChooserSection.appendChild(lightThemeDiv);
    themeChooserSection.appendChild(darkThemeDiv);
    bgColorDiv.appendChild(animDiv);
    textContainer.appendChild(textReader);
    bgColorDiv.appendChild(textContainer);
    bgColorDiv.appendChild(themeChooserSection);

    loadingSection.appendChild(bgColorDiv);
}

function loadWeatherSection()
{
    const bgColorDiv = createHtmlElement("div", ['sectionTransition'], 'bgColor', "");
    const locationTextContainer = createHtmlElement("div", ['textContainer'],"", "");
    // const textReader = createHtmlElement("p", ['textReader'],'','Enter a City:'); 
    const locationTextInput = createHtmlElement("input", ['textInput'],"locationInput","");
    const locationTextButton = createHtmlElement("button", ['textButton', 'hidden'], "locationButton", "> I can confirm this is a City");

    locationTextInput.type = "text";
    locationTextInput.placeholder = '[ type a city name in here ]';
    locationTextInput.setAttribute('oninput','showInputButton()');
    locationTextButton.setAttribute('onclick','loadWeatherInfo()');

    // textContainer.appendChild(textReader);
    locationTextContainer.appendChild(locationTextInput);
    locationTextContainer.appendChild(locationTextButton);

    bgColorDiv.appendChild(locationTextContainer);

    loadingSection.appendChild(bgColorDiv);
}

function loadTextCard(numberIdentifier = 0)
{
    const bgColorDiv = createHtmlElement("div", ['sectionTransition'], 'bgColor', "");
    const divTextContainer = createHtmlElement("div", ['textContainer'],"", "");
    switch (numberIdentifier)
    {
        // API Worked
        case '1':
            var root_city = localStorage.getItem("root_city");
            const textReader = createHtmlElement("p", ['textReader'],'',`Hmmm... ${root_city}... A Nice Place :)`); 

            divTextContainer.appendChild(textReader);
        
            bgColorDiv.appendChild(divTextContainer);
        
            loadingSection.appendChild(bgColorDiv);
            setTimeout(removeChildrenFunction, 2000);
            changeIteration('theme');
            break;
        // API Didn't work
        case '2':
            const errorTextReader = createHtmlElement("p", ['textReader'],'',`Oopsie :( Can you try Again Please`); 

            divTextContainer.appendChild(errorTextReader);

            bgColorDiv.appendChild(divTextContainer);

            loadingSection.appendChild(bgColorDiv);
            setTimeout(removeChildrenFunction, 2000);
            changeIteration('location');
            break;
        // User Consented to Asking a Question :)
        case '3':
            localStorage.setItem("root_consent","true");
            removeChildrenFunction();
            const yesTextReader = createHtmlElement("p", ['textReader'],'',`Awesome Thank You! Give me a second`); 

            divTextContainer.appendChild(yesTextReader);

            bgColorDiv.appendChild(divTextContainer);

            loadingSection.appendChild(bgColorDiv);
            setTimeout(removeChildrenFunction, 2000);
            changeIteration('location');
            break;
        // User Did not Consent to Asking a Question :()
        case '4':
            localStorage.setItem("root_consent","false");
            removeChildrenFunction();
            const noTextReader = createHtmlElement("p", ['textReader'],'',`oh... okay...`); 

            divTextContainer.appendChild(noTextReader);

            bgColorDiv.appendChild(divTextContainer);

            loadingSection.appendChild(bgColorDiv);
            setTimeout(removeChildrenFunction, 1000);
            runWeatherAPI();
            setTimeout(changeIteration, 1000, 'light');
            break;
        // Consent Text Box
        default:
            const consentTextReader = createHtmlElement("p", ['textReader'],'',`Hello! Welcome to my Site! May I ask you a few questions?`); 
            const yesButton = createHtmlElement("button", ['textButton'], "yesButton", "> Yes");
            const noButton = createHtmlElement("button", ['textButton'], "noButton", "> No");

            yesButton.setAttribute('onclick','loadTextCard("3")');
            noButton.setAttribute('onclick','loadTextCard("4")');

            divTextContainer.appendChild(consentTextReader);
            divTextContainer.appendChild(yesButton);
            divTextContainer.appendChild(noButton);
        
            bgColorDiv.appendChild(divTextContainer);
        
            loadingSection.appendChild(bgColorDiv);
            break;
    }
    numberIdentifier = 0;
}

function showInputButton()
{
    const textValue = document.getElementById('locationInput');
    if (String(textValue.value).length !== 0)
    {
        document.getElementById('locationButton').classList.remove('hidden');
    }
    else
    {
        document.getElementById('locationButton').classList.add('hidden');
    }
}

function createHtmlElement(elementName, classNames = [], identifier = '',contentText = '') {
    // step 1: Create the html element
    const htmlElment = document.createElement(elementName);

    // step 2: add classes to the element
    if (classNames != null)
    {
        classNames.forEach(className => htmlElment.classList.add(className));
    }
    else
    {

    }
    htmlElment.id = identifier;

    // step 3: add the content
    htmlElment.innerHTML = contentText;
    return htmlElment;
}


function switchTheme(chosenTheme)
{
    const theme = chosenTheme;
    mainDocument.classList.remove('darkFont', 'lightFont');

    const animDiv = document.getElementById('animDiv');
    animDiv.classList.remove('darkAnim', 'lightAnim', 'extend');

    if (theme == 'dark')
    {
        animDiv.classList.add('darkAnim');
        mainDocument.style.backgroundColor = 'white';
        mainDocument.classList.add('darkFont');
    }
    else if (theme == 'light')
    {
        animDiv.classList.add('lightAnim');
        mainDocument.style.backgroundColor = 'black';
        mainDocument.classList.add('lightFont');
    }
}

function loadWeatherInfo()
{
    const cityValue = document.getElementById('locationInput').value;
    document.getElementById('locationButton').classList.add('hidden');
    removeChildrenFunction();
    runWeatherAPI(cityValue);
}

function instaLoad()
{
    runWeatherAPI();
    removeChildrenFunction();
    changeIteration('dark');
}

function loadHeroContent()
{
    const heroSection = createHtmlElement('section', ["headerLoading"], "heroSection", "");
    const heroGradient = createHtmlElement('div', [],"heroGradient", "");
    const heroContentDiv = createHtmlElement('div', ["heroContent"], "", "");
    const heroTitle = createHtmlElement('h1', ['heroTitle'], "", "Josh Pahang Portfolio");
    const heroDescriptionDiv  = createHtmlElement('div', ['heroDescription'], "", "");
    const heroDescription = createHtmlElement('p', [], '', "// Always Striving for Improvement");
    const heroExploreButton = createHtmlElement('a', [], "exploreButton", "Explore My Work");
    heroExploreButton.setAttribute("href","projects.html");

    var root_theme = localStorage.getItem("root_theme");

    if (root_theme == 'dark')
    {
        heroSection.setAttribute("data-theme","dark");
        heroGradient.setAttribute('data-theme','dark');
    }
    else
    {
        heroSection.setAttribute("data-theme","light");
        heroGradient.setAttribute('data-theme','light');
    }

    heroDescriptionDiv.appendChild(heroDescription);
    heroDescriptionDiv.appendChild(heroExploreButton);

    heroContentDiv.appendChild(heroTitle);
    heroContentDiv.appendChild(heroDescriptionDiv);

    heroSection.appendChild(heroContentDiv);
    heroSection.appendChild(heroGradient);

    loadingSection.appendChild(heroSection);
    

    document.getElementById('homeFooter').classList.remove("hidden");
    mainDocument.classList.remove('hideOverflow');
    alertSection.appendChild(weatherCard);
}

function loadHome()
{
    console.log("root comp" + localStorage.getItem("root_completed"));
    if (localStorage.getItem("root_completed") == "yes")
    {
        const chosenCity = localStorage.getItem("root_city");
        const chosenTheme = localStorage.getItem("root_theme");
        runWeatherAPI(chosenCity);
        removeChildrenFunction();
        changeIteration(chosenTheme);
    }
}

function startOver()
{
    localStorage.setItem("root_completed", "no");
    sessionStorage.clear();
    location.reload();
}

/** Async Weather API Function */
async function runWeatherAPI(city = "Calgary") {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const apiUrl = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${weatherApiKey}&units=metric`;
    try {
        // Implement fetch request to get weather data
        const response = await fetch(apiUrl);

        if(response.ok)
        {
            const data = await response.json();
        
            const cityName = data.name;
            localStorage.setItem("root_city", cityName);
            const temp = data.main.temp;
            const feelsLike = data.main.feels_like;
            const iconCode = data.weather[0].icon;
            const weatherType = data.weather[0].main;

            const card = createHtmlElement("article", ["weatherInfo","card","weatherLoading"]);

            const cardTitle = createHtmlElement("h2", ["cardTitle"],'', cityName);
            card.appendChild(cardTitle);

            const iconContainer = createHtmlElement("div", ["iconContainer"], '', '');
            const icon = createHtmlElement("img", ["icon"], '', '');
            const cardSubtitle = createHtmlElement("h3", ["cardSubtitle"],'', weatherType);

            icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            icon.alt = "weather icon";

            card.appendChild(cardSubtitle);
            iconContainer.appendChild(icon);
            card.appendChild(iconContainer);
            
            const cardInfoContainer = createHtmlElement("div", ['cardContainer'], '' , '');

            const cardTemp = createHtmlElement("p",["cardInfo"],'', `Temperature: ${temp} °C`);
            cardInfoContainer.appendChild(cardTemp);
            
            const cardFeelsLike = createHtmlElement("p", ["cardInfo"],'', `Feels Like: ${feelsLike} °C`);
            cardInfoContainer.appendChild(cardFeelsLike);
            card.appendChild(cardInfoContainer);

            weatherCard = card;

            var root_consent = localStorage.getItem("root_consent");
            var root_complete = localStorage.getItem("root_completed");
            if (root_consent == 'true' && root_complete != 'yes')
            {
                loadTextCard('1');
            }
        }
        else
        {
            console.log("nope");
            loadTextCard('2');
        }
    } catch(error) {
        console.log('uh oh');
        // console.error(error);
    }
}
