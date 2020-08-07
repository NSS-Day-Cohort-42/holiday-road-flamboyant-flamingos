import { getItineraries, useItineraries } from "./ItineraryProvider.js"

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")


// eventHub.addEventListener("SaveButtonClicked", clickEvent => {
//         itinerariesSaved()
//         console.log("test", itinerariesSaved())
//     }


eventHub.addEventListener("itineraryStateChanged", () => {
    ItineraryList()
})

const render = (itinerary) => {
    contentTarget.innerHTML = `<H


    `
}

const ItineraryList = () => {
    getItineraries()
        .then(() =>{
            const itineraryArray = useItineraries()
            render(itineraryArray)
        })
}