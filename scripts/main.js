import {parksSelect} from "./parks/ParkSelect.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { getWeather, useWeatherCopy } from "./weather/WeatherProvider.js";

EaterySelect()
AttractionSelect()
parksSelect()


getWeather()
    .then(() => {
        const weatherDataTest = useWeatherCopy()
        console.log(weatherDataTest)
    })
