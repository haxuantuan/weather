var nhietdo=document.querySelector('.nhietdo span')
var search=document.querySelector('#search')
var city=document.querySelector('#city')
var country=document.querySelector('#country')
var time=document.querySelector('.time')
var visibility=document.querySelector('.visibility span')
var wind=document.querySelector('.wind span')
var cloud=document.querySelector('.cloud span')
var shortdesc=document.querySelector('.short-desc')
var body=document.querySelector('.body0')
async function changeURL(valueIP){
    var API=`https://api.openweathermap.org/data/2.5/weather?q=${valueIP}&appid=9ad270a6e980cf2cb4da52c4350b9a20`
    let data=await fetch(API) .then(res=>res.json())
    console.log(data)
    var mocnhietdo=Math.round(data.main.temp-273.15)
    nhietdo.innerText=Math.round(data.main.temp-273.15)
    city.innerText=data.name;
    country.innerText=data.sys.country;
    visibility.innerText=data.visibility+' (m)';
    shortdesc.innerText=data.weather[0].main;
    wind.innerText=data.wind.speed+' (m/s)';
    cloud.innerText=data.main.humidity+' (%)';
    if(mocnhietdo>=25){
        body.classList.remove('cool')
       body.classList.add('hot')
    }
   if(mocnhietdo<25){
    body.classList.remove('hot')
       body.classList.add('cool')
   }
}
search.addEventListener('keypress',function(e){
    if(e.code ==='Enter' ){
        let valueIP=search.value.trim();
        changeURL(valueIP);
        console.log(time.innerText=new Date().toLocaleString('Vi'))
    }
})
changeURL('hanoi')
