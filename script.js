const button_sent_form = document.getElementById('button_sent');
const body = document.g

button_sent_form.addEventListener('click', getWeatherFromAPI);

async function getWeatherFromAPI() {
    const city = document.getElementById('city');
    if (city.value == '') {
        city.setCustomValidity('Please enter your city');
    }
    else {
        event.preventDefault();
        city.setCustomValidity('');
        const url_weather = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city.value}?key=9L5TD2XNEJ55HLUA7YM7KFS5C`;
        try {
            const weather_info = await fetch(url_weather);
            const weather = await weather_info.json();
            const temperature = (weather.days[0].temp - 32)/1.8;
            city.value = '';
            const check_message_text = document.querySelector('h3');
            if (!check_message_text) {
                const message_text = document.createElement('h3');
                document.body.appendChild(message_text);
                message_text.innerText = `Temperature in your city: ${temperature.toFixed(2)}°C`;
            }
            else {
                check_message_text.innerText = `Temperature in your city: ${temperature.toFixed(2)}°C`;
            }
            
        }
        catch(err) {
            console.log(err);
        }
    }
    
}