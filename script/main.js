const SHOWCASE_IMG = document.getElementById('msi');
const UPDATE_TIME_INTERVAL = 10000;

const imagesArray = [
  'res/portfolio pieces/OC 2021.png',
  'res/portfolio pieces/Magazine/Pahang\,\ Josh\ -\ Magazine5.png',
  'res/portfolio pieces/1080x1350.png',
  'res/portfolio pieces/Enter the Demons Den.png',
  'res/portfolio pieces/SunPeel/SunPeel Social Media Ads_Facebook 1080x1350.png',
  'res/portfolio pieces/Magazine/Pahang, Josh - Magazine.png'
];

let i = 0;

setInterval(()=>
{

if(i == imagesArray.length - 1)
{
    i = 0;
}
else 
{
    i = i + 1
};

SHOWCASE_IMG.classList.add('fade-out');
setTimeout(() => {

    SHOWCASE_IMG.src = imagesArray[i];
    SHOWCASE_IMG.classList.remove('msi-' + i);
    SHOWCASE_IMG.classList.remove('msi-6');
    SHOWCASE_IMG.classList.add('msi-' + (i + 1));
    SHOWCASE_IMG.classList.remove('fade-out');
}, 1000)

}, UPDATE_TIME_INTERVAL);

document.querySelector('.header-logo').addEventListener('click', function(){
    window.location = "index.html";
})