import { getItineraries, useItineraries } from "./ItineraryProvider.js"
import { itinerary } from "./Itinerary.js"

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")


// eventHub.addEventListener("SaveButtonClicked", clickEvent => {
//         itinerariesSaved()
//         console.log("test", itinerariesSaved())
//     }


eventHub.addEventListener("itineraryStateChanged", () => {
    ItineraryList()
})

const render = (currentItineraryArray) => {
    contentTarget.innerHTML = `<h2>Your Saved Itineraries:</h2>
                            ${
                                currentItineraryArray.map(itineraryObj => {
                                    return itinerary(itineraryObj)
                                })
                            }
    `
}

const ItineraryList = () => {
    getItineraries()
        .then(() => {
            const itineraryArray = useItineraries()
            render(itineraryArray)
        })
}