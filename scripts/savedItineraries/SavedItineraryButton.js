import { saveItinerary } from "./ItineraryProvider.js"

// import {useParksCopy, getParks} from "./ParkProvider.js"
// import { getAttractions, useAttractions } from "./AttractionProvider.js";
// import { useEateries, getEateries } from "./EateryProvider.js";
// import {parksSelect} from "../parks/ParkSelect.js"
// import { AttractionSelect } from "../attractions/AttractionSelect.js";
// import { EaterySelect } from "../eateries/EaterySelect.js";

import { saveItinerary } from "./ItineraryProvider.js"

// import { EaterySelect } from "../eateries/EaterySelect.js"



const contentTarget = document.querySelector(".saveButton")
const eventHub = document.querySelector(".container")

export const SaveButton = () => {
    contentTarget.innerHTML =  `
    <button id="showItineraries">Save Itinerary</button>
    `
}

eventHub.addEventListener("change", (changeEvent) => {
    if(document.querySelector("#eaterySelect").value !== "0" && document.querySelector("#parkSelect").value !== "0" && document.querySelector("#attractionSelect").value !== "0") {

        return SaveButton()
    }
})


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showItineraries") {
<<<<<<< HEAD
        const customEvent = new CustomEvent("SaveButtonClicked")
        eventHub.dispatchEvent(customEvent)


        const newItinerary = {
            parkName: document.querySelector("#currentParkName").innerHTML,
            attractionName: document.querySelector("#currentAttractionName").innerHTML,
            eateryName: document.querySelector("#currentEateryName").innerHTML
        }

        saveItinerary(newItinerary)

=======
        var parkName = document.querySelector("#currentParkName").innerHTML
        var attractionName = document.querySelector("#currentAttractionName").innerHTML
        var eateryName = document.querySelector("#currentEateryName").innerHTML
    
        const newItinerary = {
            park: parkName,
            attraction: attractionName,
            eatery: eateryName 
        }
        saveItinerary(newItinerary)      
>>>>>>> 575bd339336b40aaab2458bd529c82bda9b31473
    }
})



