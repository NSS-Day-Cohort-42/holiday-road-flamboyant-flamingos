import {parksSelect} from "./parks/ParkSelect.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { getWeather, useWeatherCopy } from "./weather/WeatherProvider.js";
import "./parks/ParkItineraryPreview.js"
import "./eateries/EateryItineraryPreview.js"
import "./attractions/AttractionItineraryPreview.js"
import "./weather/Forecast.js"

EaterySelect()
AttractionSelect()
parksSelect()


getWeather()
    .then(() => {
        const weatherDataTest = useWeatherCopy()
        console.log(weatherDataTest)
    })
