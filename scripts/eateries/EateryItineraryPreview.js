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
<<<<<<< HEAD
        <div class="eatery__name" id="currentEateryName">${eatery.businessName}</div>
=======
        <div id="currentEateryName" class="eatery__name">${eatery.businessName}</div>
>>>>>>> 575bd339336b40aaab2458bd529c82bda9b31473
        <button id="eateryDetailsButton"> Click for Details </button>
        <dialog class= "eateryDialog--${eatery.id}">
            <button id"eateryDetailCloseButton"></button>
        </dialog>
    `
}

