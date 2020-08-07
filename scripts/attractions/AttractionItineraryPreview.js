import { getAttractions, useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attraction__preview")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionSelected", changeEvent => {
    const attractionThatWasSelected = changeEvent.detail.name
    getAttractions()
        .then(() => {
            const arrayOfAttractions = useAttractions()
            const foundAttractionObj = arrayOfAttractions.find(
                (attractionObj) => {
                    return attractionThatWasSelected === attractionObj.name
        }
    )
    render(foundAttractionObj)
})
})


const render = (attraction) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading attraction__previewHeading">Current Attraction</h3>
<<<<<<< HEAD
        <div class="attraction__name" id="currentAttractionName">${attraction.name}</div>
=======
        <div id="currentAttractionName" class="attraction__name" >${attraction.name}</div>
>>>>>>> 575bd339336b40aaab2458bd529c82bda9b31473
        <button id="attractionDetailsButton"> Click for Details </button>
        <dialog class= "attractionDialog--${attraction.id}">
            <button id"attractionDetailCloseButton"></button>
        </dialog>
    `
}

