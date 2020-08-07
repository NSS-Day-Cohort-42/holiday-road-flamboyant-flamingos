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

const render = (itineraryCollection) => {
    contentTarget.innerHTML += `
    <section id="showItineraries">
        <section id="parkSaved">
        ${
            itineraryCollection.map(
                parksObj => {
                    return`<div value="${parksObj.name}"> ${parksObj.name}</div>`
                    //add divs for the rest of the attractions and eateries
                }
                ).join("")
        }
        </section>
    <section>`
}

export const itinerariesSaved = () => {   
    getParks().then(()=> {
        const parks = useParksCopy()

        render(parks)
    })
}
            