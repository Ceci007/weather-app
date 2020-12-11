const weatherInfoDom = (() => {
	const weatherInfo = document.querySelector('.weather-info');
	const generalInfo = document.querySelector('.general-info');
	const location = document.querySelector('.location');
	const temperatureCelcius = document.querySelector('.temperature-celcius');
	const temperatureFahrenheit = document.querySelector(
		'.temperature-fahrenheit'
	);
	const feelsLikeCelcius = document.querySelector('.feels-like-celcius');
	const feelsLikeFahrenheit = document.querySelector('.feels-like-fahrenheit');
	const wind = document.querySelector('.wind');
	const humidity = document.querySelector('.humidity');

	function displayData(extractedData) {
		generalInfo.textContent = extractedData.generalInfo;
		location.textContent = extractedData.location;
		temperatureCelcius.innerHTML = `${Math.round(
			extractedData.temperature
		)}<sup class="main-temp">&#8451</sup>`;
		temperatureFahrenheit.innerHTML = `${Math.round(
			1.8 * extractedData.temperature + 32
		)}<sup class="main-temp">&#8457</sup>`;
		feelsLikeCelcius.innerHTML = `Feels like: ${Math.round(
			extractedData.feelsLike
		)}<sup class="alt-temp">&#8451</sup>`;
		feelsLikeFahrenheit.innerHTML = `Feels like: ${Math.round(
			1.8 * extractedData.feelsLike + 32
		)}<sup class="alt-temp">&#8457</sup>`;
		wind.textContent = `Wind: ${extractedData.wind} km/h`;
		humidity.textContent = `Humidity: ${extractedData.humidity}%`;
		weatherInfo.classList.remove('anim');
		weatherInfo.focus();
		weatherInfo.classList.add('anim');
	}

	let celcius = true;
	function toggleUnits() {
		if (celcius) {
			temperatureCelcius.style.display = 'none';
			temperatureFahrenheit.style.display = 'flex';
			feelsLikeCelcius.style.display = 'none';
			feelsLikeFahrenheit.style.display = 'block';
			celcius = false;
		} else {
			temperatureCelcius.style.display = 'flex';
			temperatureFahrenheit.style.display = 'none';
			feelsLikeCelcius.style.display = 'block';
			feelsLikeFahrenheit.style.display = 'none';
			celcius = true;
		}
	}

	return {
		weatherInfo,
		displayData,
		toggleUnits,
	};
})();

function throwError() {
	const error = document.querySelector('.error');
	error.style.visibility = 'visible';
}

function hideError() {
	const error = document.querySelector('.error');
	error.style.visibility = 'hidden';
}

export { weatherInfoDom, throwError, hideError };