const searchWeather = async () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        document.getElementById('error').innerText = 'search field should not me empty';
        document.getElementById('weather-info').innerText = '';
        return;
    }
    document.getElementById('error').innerText = '';
    document.getElementById('weather-info').innerText = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=0c4ef1b4f6592cb29a883e80055fa44a&units=metric`;


    const res = await fetch(url);
    const data = await res.json();

    displayWeather(data);
}


const displayWeather = location => {
    console.log(location);
    const weatherContainer = document.getElementById('weather-info');
    if (location.cod == 404) {
        document.getElementById('error').innerText = 'Result not found';
        return;
    }
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>${location.name}</h3>
    <h3>${location.sys.country}</h3>
    <img src="http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png">
    <h2><span>${location.main.temp}</span>&deg;C</h2>
    		<p>${location.weather[0].main} <i>(${location.weather[0].description})</i></p>
            <p>Humidity <b>${location.main.feels_like}</p>   
    `;

    weatherContainer.appendChild(div);
}

/* // convert unix time to local format
const convertUnixTimeToLocal = unixTime => {
    const milliSeconds = unixTime * 1000;
    const humanDateFormat = new Date(milliSeconds);
    const convertedTimeObject = {
        fullDate: humanDateFormat.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }),
        time12h: humanDateFormat.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
    };
    return convertedTimeObject;
};

// const currentDate = new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
const localDate = convertUnixTimeToLocal(location.dt);
const sunriseTime = convertUnixTimeToLocal(location.sys.sunrise);
const sunsetTime = convertUnixTimeToLocal(location.sys.sunset); */