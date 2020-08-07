import {useParksCopy, getParks} from "./ParkProvider.js"

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
})


const render = (park) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading park__previewHeading">Current Park</h3>
        <div class="park__name" id="currentParkName">${park.name}</div>
        <button id="parkDetailsButton"> Click for Details </button>
        <dialog class= "parkDialog--${park.id}">
            <button id"parkDetailCloseButton"></button>
        </dialog>
    `
}








