console.log("Hello World");
console.log("Cześć");
console.log("hejka");
console.log("aaaaa");


import style from "./scss/index.scss"

// funkcja menu hamburger---
let burger = document.querySelector('.burger');
// console.log (burger);
let icon = document.querySelectorAll('.ic-menu');
// console.log(icon);
let nav = document.querySelector('nav');
burger.addEventListener('click', function(){
nav.classList.toggle("off");
icon[0].classList.toggle('off');
icon[1].classList.toggle('off');
});


// działa to w projekcie można korzystać OK OK --nie można wybrać wcześniejszej daty-------------
const today = document.getElementById('today');

let dateNow = new Date();

let dateFormat = (dateNow.getMonth()+1) <10 ? `${dateNow.getFullYear()}-0${dateNow.getMonth()+1}-${dateNow.getDate()}` : `${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()}`

let todayMin = today.setAttribute('min', dateFormat);

today.setAttribute('value', dateFormat);

console.log(dateFormat);

// okno popup login-----------------------------------------------------------------------
const btn1=document.getElementById("button");
console.log(btn1);
const pop1=document.querySelector(".popup");
console.log(pop1);
function pop_up(){
    pop1.style.display = "flex";
}
btn1.addEventListener("click",pop_up);

// document.getElementById("button").addEventListener("click",function(){
//     document.querySelector(".popup").style.display = "flex";
// })

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
})

// data i godzina *************************
// funkcja godzina -------------

function getTime() 
{
    return (new Date()).toLocaleTimeString();
}

document.getElementById('time_now').innerHTML = getTime();

setInterval(function() {

    document.getElementById('time_now').innerHTML = getTime();
    
}, 1000);

// funkcja data--------------

function date_today() {
    const monthsArr = ["stycznia", "lutego", "marca", "kwietnia",
    "maja", "czerwca", "lipca", "sierpnia", "września",
    "października", "listopada", "grudnia"
    ];
   
    const daysArr = ["Niedziela", "Poniedziałek", "Wtorek", "Środa",
                   "Czwartek", "Piątek", "Sobota"];
   
    const dateObj = new Date();
   
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const numDay = dateObj.getDate();
    const day = dateObj.getDay();
    
   
    
   
    const output =  daysArr[day] + ", " + numDay + " " + monthsArr[month] 
    + " " + year + " r.";
   
    return output;
  }
   
    
  document.getElementById('date_now').innerHTML = date_today();

  // *******************************pogoda OK Rzeszów******************************************
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Rzeszow&appid=098f3993f992b76efc3776ec8a74597f"
  )
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      console.log(data);
      // const stC = "O";
      // const stCr= stC.sub();
      // console.log(stCr);

      document.getElementById("output").innerText = `Temperatura w Rzeszowie:  ${((data.main.temp - 273.15).toFixed(1))} stopni C`
      if ((data.main.temp - 273.15) > 18) {
      document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/01/17/16/46/sun-1987414__340.png">`;
      } 

      if ((data.main.temp - 273.15) <= 18 &&(data.main.temp - 273.15)>=8 ) {
        document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/01/17/16/46/cloud-1987416__340.png">`;
                  
      } 
      if ((data.main.temp - 273.15) < 8 &&(data.main.temp - 273.15)>=1 ) {
       
        document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/08/25/12/33/sky-2680050__340.jpg">`;
      } 
      if ((data.main.temp - 273.15) < 1 &&(data.main.temp - 273.15)>=-5 ) {
       
        document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/01/17/16/45/fog-1987405__340.png">`;
      } 
      if ((data.main.temp - 273.15) < -5 &&(data.main.temp - 273.15)>-20 ) {
       
        document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/01/17/16/46/snow-1987413__340.png">`;
      } 
      if ((data.main.temp - 273.15) <= -20  ) {
        
        document.getElementById("image").innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/03/18/15/08/snow-1265208__340.png">`;
        
      } 
      else {
        console.log("brak");
      }
    });

  // lotnisko docelowe - przypisany  samolot----------------
const flySmall = document.querySelector(".flySmall");
const flyMedium = document.querySelector(".flyMedium");
const flyMax = document.querySelector(".flyMax");
console.log(flySmall);
let btnS=document.querySelector("#btn");
console.log(btnS);
btnS.addEventListener('click', function(){
    document.getElementById("plane");
    if (document.querySelector("#plane").value === "Warszawa") {
      flySmall.classList.add('active0');
    } 
    if (document.querySelector("#plane").value === "Paryż") {
      flyMedium.classList.add('active01');
    }
    if (document.querySelector("#plane").value === "Tokio") {
      flyMax.classList.add('active02');
    }
    else {
      
      alert("wpisz Warszawa, Paryż lub Tokio")
    }

  })

// popModal baggage
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close1")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// popModal all city---

const btnModal = document.querySelector('.weatherCity');
btnModal.addEventListener("click", function () {
document.querySelector('.modalC-wrapC').classList.add('activeC');
document.querySelector('.main').classList.add('blur')
})

const hideC =document.querySelector('span.hideC'); 
hideC.addEventListener("click", function () {
document.querySelector('.modalC-wrapC').classList.remove('activeC');
document.querySelector('.main').classList.remove('blur')
})

// weather all city---

const departureCity = document.querySelector('.inputTxt');



var button = document.querySelector(".btn");
console.log(button);
const showData = document.querySelector(".showData");

// const API_Key = "098f3993f992b76efc3776ec8a74597f";


button.addEventListener('click',function() {
const worldCity = departureCity.value;


fetch('https://api.openweathermap.org/data/2.5/weather?q='+worldCity+'&units=metric&appid=098f3993f992b76efc3776ec8a74597f')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        departureCity.value = "";
        
        showData.innerHTML = `
        
                                <ul>
                                    <li class="city">${data.name}</li>
                                    <li class="desc">Zachmurzenie - ${data.clouds.all}%</li>
                                    <li class="desc">Prędkość wiatru - ${data.wind.speed} m/s</li>
                                    <li class="temp">${data.main.temp}&#176C</li>
                                </ul>
                            `;
    
    
    
    

});

});


const btnModalW = document.querySelector('.cityLongWeather');
btnModalW.addEventListener("click", function () {
document.querySelector('.modalWeatherLong').classList.add('activeW');
document.querySelector('.main').classList.add('blur');
  });
const hideW =document.querySelector('span.hideW'); 
hideW.addEventListener("click", function () {
document.querySelector('.modalWeatherLong').classList.remove('activeW');
document.querySelector('.main').classList.remove('blur');
  });
// weather city Warszawa---
fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=52.23547&lon=21.04191&exclude=current,minutely,hourly&units=metric&appid=098f3993f992b76efc3776ec8a74597f"
)
  .then((resp) => resp.json()) // Transform the data into json
  .then((data) => {
    console.log(data);

    document.getElementById("output1w").innerText = (data.daily[0].temp.day).toFixed(0);
    // console.log(data.daily[0].temp.day);
    document.getElementById("output1wa").innerText = data.daily[0].clouds;

    // console.log(data.daily[0].weather.wind_speed);
    document.getElementById("output2w").innerText = (data.daily[1].temp.day).toFixed(0);
    document.getElementById("output2wa").innerText = data.daily[1].clouds;
    document.getElementById("output3w").innerText = (data.daily[2].temp.day).toFixed(0);
    document.getElementById("output3wa").innerText = data.daily[2].clouds;
    document.getElementById("output4w").innerText = (data.daily[3].temp.day).toFixed(0);
    document.getElementById("output4wa").innerText = data.daily[3].clouds;
    document.getElementById("output5w").innerText = (data.daily[4].temp.day).toFixed(0);
    document.getElementById("output5wa").innerText = data.daily[4].clouds;
    document.getElementById("output6w").innerText = (data.daily[5].temp.day).toFixed(0);
    document.getElementById("output6wa").innerText = data.daily[5].clouds;
    document.getElementById("output7w").innerText = (data.daily[6].temp.day).toFixed(0);
    document.getElementById("output7wa").innerText = data.daily[6].clouds;
    
    
});

// paryż
fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=48.853401&lon=2.3486&exclude=current,minutely,hourly&units=metric&appid=098f3993f992b76efc3776ec8a74597f"
    )
      .then((resp) => resp.json()) // Transform the data into json
      .then((data) => {
        console.log(data);
  
        document.getElementById("output1p").innerText = (data.daily[0].temp.day).toFixed(0);
        // console.log(data.daily[0].temp.day);
        document.getElementById("output1pa").innerText = data.daily[0].clouds;
  
        // console.log(data.daily[0].weather.wind_speed);
        document.getElementById("output2p").innerText = (data.daily[1].temp.day).toFixed(0);
        document.getElementById("output2pa").innerText = (data.daily[1].clouds);
        document.getElementById("output3p").innerText = (data.daily[2].temp.day).toFixed(0);;
        document.getElementById("output3pa").innerText = data.daily[2].clouds;
        document.getElementById("output4p").innerText = (data.daily[3].temp.day).toFixed(0);
        document.getElementById("output4pa").innerText = data.daily[3].clouds;
        document.getElementById("output5p").innerText = (data.daily[4].temp.day).toFixed(0);
        document.getElementById("output5pa").innerText = data.daily[4].clouds;
        document.getElementById("output6p").innerText = (data.daily[5].temp.day).toFixed(0);;
        document.getElementById("output6pa").innerText = data.daily[5].clouds;
        document.getElementById("output7p").innerText = (data.daily[6].temp.day).toFixed(0);
        document.getElementById("output7pa").innerText = data.daily[6].clouds;
        
        
});

// Tokio
fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=35.689499&lon=139.691711&exclude=current,minutely,hourly&units=metric&appid=098f3993f992b76efc3776ec8a74597f"
  )
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      console.log(data);

      document.getElementById("output1").innerText = (data.daily[0].temp.day).toFixed(0);
      // console.log(data.daily[0].temp.day);
      document.getElementById("output1a").innerText = data.daily[0].clouds;

      // console.log(data.daily[0].weather.wind_speed);
      document.getElementById("output2").innerText = (data.daily[1].temp.day).toFixed(0);
      document.getElementById("output2a").innerText = data.daily[1].clouds;
      document.getElementById("output3").innerText = (data.daily[2].temp.day).toFixed(0);
      document.getElementById("output3a").innerText = data.daily[2].clouds;
      document.getElementById("output4").innerText = (data.daily[3].temp.day).toFixed(0);
      document.getElementById("output4a").innerText = data.daily[3].clouds;
      document.getElementById("output5").innerText = (data.daily[4].temp.day).toFixed(0);
      document.getElementById("output5a").innerText = data.daily[4].clouds;
      document.getElementById("output6").innerText = (data.daily[5].temp.day).toFixed(0);
      document.getElementById("output6a").innerText = data.daily[5].clouds;
      document.getElementById("output7").innerText = (data.daily[6].temp.day).toFixed(0);
      document.getElementById("output7a").innerText = data.daily[6].clouds;
 
      
});



