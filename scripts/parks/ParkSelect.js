import {useParksCopy, getParks} from "./ParkProvider.js"

const contentTarget = document.querySelector(".parks__dropdown")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "parkSelect") {
        const selectedPark = changeEvent.target.value
        const customEvent= new CustomEvent("parkSelected", {
            detail: {
                park: selectedPark
            }
    })
    eventHub.dispatchEvent(customEvent)
    }
})

const render = parksCollection => {
    contentTarget.innerHTML = `
    <select class= "dropdown" id="parkSelect">
        <option vlaue- "0">Choose a National Park...</option>
        ${
            parksCollection.map(
                parksObj => {
                    return `<option value="${parksObj.id}"> ${parksObj.name}</option>`
            }
         ).join("")
        }
    </select>
    `
}

export const parksSelect = () => {
    getParks().then(()=> {
        const parks = useParksCopy()

        render(parks)
    })
}