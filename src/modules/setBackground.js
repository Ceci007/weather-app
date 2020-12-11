import thunderstorm0 from '../assets/imgs/night/thunderstorm/thunderstorm0.jpg';
import thunderstorm1 from '../assets/imgs/night/thunderstorm/thunderstorm1.jpg';
import thunderstorm2 from '../assets/imgs/night/thunderstorm/thunderstorm2.jpg';
import thunderstorm3 from '../assets/imgs/night/thunderstorm/thunderstorm3.jpg';
import rain0 from '../assets/imgs/night/rain/rain0.jpg';
import rain1 from '../assets/imgs/night/rain/rain1.jpg';
import rain2 from '../assets/imgs/night/rain/rain2.jpg';
import rain3 from '../assets/imgs/night/rain/rain3.jpg';
import rain4 from '../assets/imgs/night/rain/rain4.jpg';
import snow0 from '../assets/imgs/night/snow/snow0.jpg';
import snow1 from '../assets/imgs/night/snow/snow1.jpg';
import snow2 from '../assets/imgs/night/snow/snow2.jpg';
import snow3 from '../assets/imgs/night/snow/snow3.jpg';
import snow4 from '../assets/imgs/night/snow/snow4.jpg';
import snow5 from '../assets/imgs/night/snow/snow5.jpg';
import fog0 from '../assets/imgs/night/fog/fog0.jpg';
import fog1 from '../assets/imgs/night/fog/fog1.jpg';
import fog2 from '../assets/imgs/night/fog/fog2.jpg';
import clear0 from '../assets/imgs/night/clear/clear0.jpg';
import clear1 from '../assets/imgs/night/clear/clear1.jpg';
import clear2 from '../assets/imgs/night/clear/clear2.jpg';
import clear3 from '../assets/imgs/night/clear/clear3.jpg';
import clear4 from '../assets/imgs/night/clear/clear4.jpg';
import clouds0 from '../assets/imgs/night/clouds/clouds0.jpg';
import clouds1 from '../assets/imgs/night/clouds/clouds1.jpg';
import clouds2 from '../assets/imgs/night/clouds/clouds2.jpg';
import dayThunderstorm0 from '../assets/imgs/day/thunderstorm/thunderstorm0.jpg';
import dayThunderstorm1 from '../assets/imgs/day/thunderstorm/thunderstorm1.jpg';
import dayThunderstorm2 from '../assets/imgs/day/thunderstorm/thunderstorm2.jpg';
import dayThunderstorm3 from '../assets/imgs/day/thunderstorm/thunderstorm3.jpg';
import dayRain0 from '../assets/imgs/day/rain/rain0.jpg';
import dayRain1 from '../assets/imgs/day/rain/rain1.jpg';
import dayRain2 from '../assets/imgs/day/rain/rain2.jpg';
import dayRain3 from '../assets/imgs/day/rain/rain3.jpg';
import dayRain4 from '../assets/imgs/day/rain/rain4.jpg';
import daySnow0 from '../assets/imgs/day/snow/snow0.jpg';
import daySnow1 from '../assets/imgs/day/snow/snow1.jpg';
import daySnow2 from '../assets/imgs/day/snow/snow2.jpg';
import daySnow3 from '../assets/imgs/day/snow/snow3.jpg';
import dayFog0 from '../assets/imgs/day/fog/fog0.jpg';
import dayFog1 from '../assets/imgs/day/fog/fog1.jpg';
import dayFog2 from '../assets/imgs/day/fog/fog2.jpg';
import dayFog3 from '../assets/imgs/day/fog/fog3.jpg';
import dayFog4 from '../assets/imgs/day/fog/fog4.jpg';
import dayClear0 from '../assets/imgs/day/clear/clear0.jpg';
import dayClear1 from '../assets/imgs/day/clear/clear1.jpg';
import dayClear2 from '../assets/imgs/day/clear/clear2.jpg';
import dayClear3 from '../assets/imgs/day/clear/clear3.jpg';
import dayClouds0 from '../assets/imgs/day/clouds/clouds0.jpg';
import dayClouds1 from '../assets/imgs/day/clouds/clouds1.jpg';
import dayClouds2 from '../assets/imgs/day/clouds/clouds2.jpg';
import dayClouds3 from '../assets/imgs/day/clouds/clouds3.jpg';

const nightThunderstormArr = [
	thunderstorm0,
	thunderstorm1,
	thunderstorm2,
	thunderstorm3,
];
const nightRainArr = [rain0, rain1, rain2, rain3, rain4];
const nightClearArr = [clear0, clear1, clear2, clear3, clear4];
const nightSnowArr = [snow0, snow1, snow2, snow3, snow4, snow5];
const nightFogArr = [fog0, fog1, fog2];
const nightCloudsArr = [clouds0, clouds1, clouds2];

const dayThunderstormArr = [
	dayThunderstorm0,
	dayThunderstorm1,
	dayThunderstorm2,
	dayThunderstorm3,
];
const dayRainArr = [dayRain0, dayRain1, dayRain2, dayRain3, dayRain4];
const daySnowArr = [daySnow0, daySnow1, daySnow2, daySnow3];
const dayFogArr = [dayFog0, dayFog1, dayFog2, dayFog3, dayFog4];
const dayClearArr = [dayClear0, dayClear1, dayClear2, dayClear3];
const dayCloudsArr = [dayClouds0, dayClouds1, dayClouds2, dayClouds3];

function setBackground(id, sunrise, sunset) {
	let currentUnixTimeSeconds = getCurrentUnixTime();
	const content = document.querySelector('#content');
	if (currentUnixTimeSeconds >= sunrise && currentUnixTimeSeconds <= sunset) {
		if (id >= 200 && id <= 232) {
			content.style.backgroundImage = `url(
			${dayThunderstormArr[Math.floor(Math.random() * dayThunderstormArr.length)]}
		)`;
		} else if (id >= 300 && id <= 531) {
			content.style.backgroundImage = `url(
			${dayRainArr[Math.floor(Math.random() * dayRainArr.length)]}
		)`;
		} else if (id >= 600 && id <= 622) {
			content.style.backgroundImage = `url(
			${daySnowArr[Math.floor(Math.random() * daySnowArr.length)]}
		)`;
		} else if (id >= 701 && id <= 781) {
			content.style.backgroundImage = `url(
			${dayFogArr[Math.floor(Math.random() * dayFogArr.length)]}
		)`;
		} else if (id === 800) {
			content.style.backgroundImage = `url(
			${dayClearArr[Math.floor(Math.random() * dayClearArr.length)]}
		)`;
		} else if (id >= 801 && id <= 804) {
			content.style.backgroundImage = `url(
			${dayCloudsArr[Math.floor(Math.random() * dayCloudsArr.length)]}
		)`;
		}
	} else if (
		currentUnixTimeSeconds >= sunset ||
		currentUnixTimeSeconds <= sunrise
	) {
		if (id >= 200 && id <= 232) {
			content.style.backgroundImage = `url(
			${nightThunderstormArr[Math.floor(Math.random() * nightThunderstormArr.length)]}
		)`;
		} else if (id >= 300 && id <= 531) {
			content.style.backgroundImage = `url(
			${nightRainArr[Math.floor(Math.random() * nightRainArr.length)]}
		)`;
		} else if (id >= 600 && id <= 622) {
			content.style.backgroundImage = `url(
			${nightSnowArr[Math.floor(Math.random() * nightSnowArr.length)]}
		)`;
		} else if (id >= 701 && id <= 781) {
			content.style.backgroundImage = `url(
			${nightFogArr[Math.floor(Math.random() * nightFogArr.length)]}
		)`;
		} else if (id === 800) {
			content.style.backgroundImage = `url(
			${nightClearArr[Math.floor(Math.random() * nightClearArr.length)]}
		)`;
		} else if (id >= 801 && id <= 804) {
			content.style.backgroundImage = `url(
			${nightCloudsArr[Math.floor(Math.random() * nightCloudsArr.length)]}
		)`;
		}
	}
}

function getCurrentUnixTime() {
	let d = new Date();
	return Math.floor(d.getTime() / 1000);
}

export default setBackground;