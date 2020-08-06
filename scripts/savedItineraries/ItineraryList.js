// import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js";
import {useParksCopy, getParks} from "../parks/ParkProvider.js"
// import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("SaveButtonClicked", clickEvent => {
    debugger
        itinerariesSaved()
    }
)

const render = (itineraryCollection) => {
    debugger
    contentTarget.innerHTML += `
    <section id="showItineraries">
        <section id="parkSaved">
        ${
            itineraryCollection.map(
                parksObj => {
                    return `<option value="${parksObj.name}"> ${parksObj.name}</option>`
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
            