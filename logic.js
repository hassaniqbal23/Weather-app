let input = document.querySelector('.input');
let button = document.querySelector('.btn');
let image = document.querySelector('.image');
let temperature = document.querySelector('.temperature');
let degree = document.querySelector('.degree');
let clouds = document.querySelector('.cloud');
let huminity = document.querySelector('.huminity');
let wind = document.querySelector('.wind');
let location1 = document.querySelector('.location1');
let image_content = document.querySelector('.weather_img');
let weather_content = document.querySelector('.weather_content');
async function checkWeather(city) {
	let myApiKey = 'dc683bc02bf703d162c074f0380ea635';
	let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`;
	let weatherData = await fetch(`${URL}`);
	let data = await weatherData.json();
	if (data.cod === '404' || data.message === 'city not found') {
		location1.style.display = 'flex';
		image_content.style.display = 'none';
		weather_content.style.display = 'none';

		return;
	}
	location1.style.display = 'none';
	image_content.style.display = 'flex';
	weather_content.style.display = 'flex';

	temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
	clouds.innerHTML = `${data.weather[0].description}`;
	degree.innerHTML = `${data.main.humidity + '%'}`;
	wind.innerHTML = `${data.wind.speed + 'Km/H'}`;
	switch (data.weather[0].main) {
		case 'Clouds':
			image.src = 'img/cloud.png';
			break;
		case 'Rain':
			image.src = 'img/rain.png';
			break;
		case 'Clear':
			image.src = 'img/clear.png';
			break;
		case 'Snow':
			image.src = 'img/snow.png';
	}
}

button.addEventListener('click', () => {
	checkWeather(input.value);
	input.value = '';
});
