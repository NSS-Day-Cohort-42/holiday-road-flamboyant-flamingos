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
        <div class="eatery__name">${attraction.name}</div>
        <button id="eateryDetailsButton"> Click for Details </button>
        <dialog class= "eateryDialog--${attraction.id}">
            <button id"eateryDetailCloseButton"></button>
        </dialog>
    `
}

