import {useParksCopy, getParks} from "./ParkProvider.js"
import {parkDetailsButton} from "../DetailsButton.js"

const contentTarget = document.querySelector(".park__preview")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkSelected", changeEvent => {
    const parkThatWasSelected = changeEvent.detail.name
    getParks()
        .then(() => {
            const arrayOfParks = useParksCopy()
            const foundParkObj = arrayOfParks.find(
                (parkObj) => {
                    return parkThatWasSelected === parkObj.name
        }
    )
    render(foundParkObj)
})
    .then(parkDetailsButton)
})


const render = (park) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading park__previewHeading">Current Park</h3>
        <div class="park__name">${park.name}</div>
        <button id="parkDetails--${park.id}"> Click for Details </button>
        <dialog class= "parkDialog--${park.id}">
            <h4>${park.name}</h4>
                ${
                    park.addresses.map(
                        addressObj => {
                            if(addressObj.type === "Physical"){
                            return `
                            <h5>Address: </h5>
                            <div class="park__address">${addressObj.line1} ${addressObj.city}, ${addressObj.stateCode} ${addressObj.postalCode}</div>`
                            }
                        }
                    ).join("")
                }
                <h5>Description: </h5>
                <div class="park__description">${park.description}</div>
                ${
                    park.operatingHours.map(
                        hoursObj => {
                            return `
                            <h5> Hours: </h5>
                            
                            <div class="hours--monday">Monday: ${hoursObj.standardHours.monday}</div>
                            <div class="hours--tuesday">Tuesday: ${hoursObj.standardHours.tuesday}</div>
                            <div class="hours--wednesday">Wednesday: ${hoursObj.standardHours.wednesday}</div>
                            <div class="hours--thursday">Thursday: ${hoursObj.standardHours.thursday}</div>
                            <div class="hours--friday">Friday: ${hoursObj.standardHours.friday}</div>
                            <div class="hours--saturday">Saturday: ${hoursObj.standardHours.saturday}</div>
                            <div class="hours--sunday">Sunday: ${hoursObj.standardHours.sunday}</div>
                        `
                        }
                    ).join("")
                }
                <h5>Cost: </h5>
                ${
                    park.entranceFees.map(
                        feesObj => {
                            return `
                            <div class="park__cost">${feesObj.title}: $${feesObj.cost}</div>
                            `
                        }
                    ).join("")
                }
                <h5>Park Site</h5>
                <div class="park__url"><a target=_blank href="${park.url}">Cuyahoga Valley Website</a></div>
        <br></br>
        <button id="parkDetailCloseButton">Close</button>
        </dialog>
    `
}
