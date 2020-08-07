import { useEateries, getEateries } from "./EateryProvider.js";
import {eateryDetailsButton} from "../DetailsButton.js"

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
.then(eateryDetailsButton)
})


const render = (eatery) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading eatery__previewHeading">Current Eatery</h3>
        <div class="eatery__name">${eatery.businessName}</div>
        <button id="eateryDetailsButton--${eatery.id}"> Click for Details </button>
        <dialog class= "eateryDialog--${eatery.id}">
        <h4>${eatery.businessName}</h4>
            <div class="eatery__address"> ${eatery.city}, ${eatery.state} </div>
            <h5>Description: </h5>
            <div class="eatery__description"> ${eatery.description} </div>
            <br></br>
            <div class ="eatery__restrooms">Restrooms: ${amenetiesRestrooms()} </div>
            <div class ="eatery__playground">Playground: ${amenetiesPlayground()} </div>
            <div class ="eatery__diaperFacility">Diaper Facility: ${amenetiesDiaperFacility()} </div>
            
            <br></br>
            <button id="eateryDetailCloseButton">Close</button>
        </dialog>
    `
}

export const amenetiesPlayground = () => {
    if(amenetiesPlayground.playground === true){
        return "Yes"
    } else {
        return"No"
    }   
}

export const amenetiesRestrooms = () =>{
    if(amenetiesRestrooms.restrooms === true){
    return "Yes"
} else {
    return"No"
    }   
}
export const amenetiesDiaperFacility = () =>{
    if(amenetiesDiaperFacility.diaperFacility === true){
    return "Yes"
} else {
    return"No"
    }   
}