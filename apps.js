const API_key = `2a5e293857f34bb3e0608f394f7b6a4c`;
const searchWeather = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    /* if (city == '') {
        document.getElementById('error').innerText = 'search field should not me empty';
        document.getElementById('weather-info').innerText = '';
        return;

    }
    document.getElementById('error').innerText = '';
    document.getElementById('weather-info').innerText = ''; */

    /* const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`; 
    0c4ef1b4f6592cb29a883e80055fa44a*/
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a5e293857f34bb3e0608f394f7b6a4c&units=metric`;
    //inside div
    /* <img src="http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png"> */
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))


}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);


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