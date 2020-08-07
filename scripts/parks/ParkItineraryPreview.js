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
<<<<<<< HEAD
        <div class="park__name" id="currentParkName">${park.name}</div>
=======
        <div id="currentParkName" class="park__name">${park.name}</div>
>>>>>>> 575bd339336b40aaab2458bd529c82bda9b31473
        <button id="parkDetailsButton"> Click for Details </button>
        <dialog class= "parkDialog--${park.id}">
            <button id"parkDetailCloseButton"></button>
        </dialog>
    `
}








