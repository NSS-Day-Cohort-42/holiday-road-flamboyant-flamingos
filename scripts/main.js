import {parksSelect} from "./parks/ParkSelect.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { getWeather, useWeatherCopy } from "./weather/WeatherProvider.js";
import { Forecast } from "./weather/Forecast.js";

EaterySelect()
AttractionSelect()
parksSelect()
Forecast()


getWeather()
    .then(() => {
        const weatherDataTest = useWeatherCopy()
        console.log(weatherDataTest)
    })
