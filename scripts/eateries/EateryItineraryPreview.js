import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".eatery__preview")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eaterySelected", changeEvent => {
    const eateryThatWasSelected = changeEvent.detail.businessName
    getEateries()
        .then(() => {
            const arrayOfEateries = useEateries()
            const foundEateryObj = arrayOfEateries.find(
                (eateryObj) => {
                    return eateryThatWasSelected === eateryObj.businessName
        }
    )
    render(foundEateryObj)
})
})


const render = (eatery) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading eatery__previewHeading">Current Eatery</h3>
        <div class="eatery__name" id="currentEateryName">${eatery.businessName}</div>
        <button id="eateryDetailsButton"> Click for Details </button>
        <dialog class= "eateryDialog--${eatery.id}">
            <button id"eateryDetailCloseButton"></button>
        </dialog>
    `
}

