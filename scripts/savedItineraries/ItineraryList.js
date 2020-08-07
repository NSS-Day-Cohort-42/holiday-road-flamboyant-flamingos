// import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js";
import {useParksCopy, getParks} from "../parks/ParkProvider.js"
// import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("SaveButtonClicked", clickEvent => {
        itinerariesSaved()
        console.log("test", itinerariesSaved())
    }
)

eventHub.addEventListener("itineraryStateChanged", clickEvent => {
    if (clickEvent.target.id === "showItineraries") {
        var parkName = document.querySelector("#currentParkName").innerHTML
        var attractionName = document.querySelector("#currentAttractionName").innerHTML
        var eateryName = document.querySelector("#currentEateryName").innerHTML
    
        const newItinerary = {
            park: parkName,
            attraction: attractionName,
            eatery: eateryName 
        }
        render(newItinerary)      
    }

})

const render = (itinerary) => {
    itineraryTarget.innerHTML = `
    <section id="entry--${itinerary.id}" class="journalEntry">
        <div class="entry__date">${entry.date}</div>
        <div class="entry__concept">${entry.concept}</div>
        <div class="entry__concept">${entry.entry}</div>
        <div class="entry__concept">${entry.mood}</div>
    </section>
    `
}            