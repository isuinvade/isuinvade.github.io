 const API_KEY ="0f5661a999c52251b5d79d826c1de2b7"
 
 function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather  span:first-child");
        const city = document.querySelector("#weather  span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
 }

 function onGeoError() {
    alert("Can't find you!"); 
 }
 
 navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 