const cityInput = document.querySelector('.inputText');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    console.log(cityInput.value)

    getDate(cityInput.value)

});

function getDate(name) {
    // console.log(name)
    // 
    const API = "64f5abe62faa3e2d62533d18561cdeea"

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`

    console.log(baseURL)

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const {
                name,
                sys: {
                    country
                },
                main: {
                    temp,
                    feels_like,
                    humidity
                },
                wind: {
                    speed
                },
                weather: [{
                    description
                }]
            } = data;
            // console.log(name,country,temp °, feels_like,description ,humidity%,speed km/s) 

            const city = document.querySelector("#sehir")
            const temperature = document.querySelector("#sicaklik")
            const weatherDesc = document.querySelector("#havaDurumu")
            const feel = document.querySelector("#hissedilen")
            const hum = document.querySelector("#humidity")
            const wind = document.querySelector("#wind")
            //*console.log(city,temperature,weatherDesc,feel,hum,wind)

            //cekilen elemanları html elemanları yerine yerlestrme

            city.innerHTML = `${name} - ${country}`
            temperature.innerHTML = `${Math.round(temp)}°`;

            weatherDesc.innerHTML = `${description}`
            feel.innerHTML = `${"Hissedilen Sıcaklık : " } ${Math.round(feels_like)}°`
            hum.innerHTML = ` ${"Nem Oranı:"}  %${humidity}`
            wind.innerHTML = `${"Rüzgar:"} ${speed} km/s`


        })

        .catch(err => console.log("err"))

    cityInput.value = ""
    cityInput.focus()
}