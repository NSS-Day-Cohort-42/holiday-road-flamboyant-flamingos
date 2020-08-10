import {useParksCopy, getParks} from "./ParkProvider.js"

const contentTarget = document.querySelector(".parks__selector")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "parkSelect") {
        const [parkName, parkZip] = changeEvent.target.value.split("--")
        const customEvent = new CustomEvent("parkSelected", {
          
            detail: {
                name: parkName,
                zip: parkZip
            }
    })
    eventHub.dispatchEvent(customEvent)
    }
})

const render = parksCollection => {
    contentTarget.innerHTML = `
    <select class= "dropdown dropdown_animation" id="parkSelect">
        <option vlaue- "0">Choose a National Park...</option>
        ${
            parksCollection.map(
                parksObj => {
                    return `<option value="${parksObj.name}--${parksObj.addresses[0].postalCode}"> ${parksObj.name}</option>`
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