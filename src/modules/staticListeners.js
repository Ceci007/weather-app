  
import { weatherInfoDom } from './domFunctionality';
import { getWeather } from './logic';

const search = document.querySelector('.search');
search.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		getWeather(e.target.value);
		e.target.value = '';
	}
});

weatherInfoDom.weatherInfo.addEventListener(
	'click',
	weatherInfoDom.toggleUnits
);