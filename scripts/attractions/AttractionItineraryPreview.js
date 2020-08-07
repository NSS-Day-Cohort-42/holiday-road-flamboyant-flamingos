import { getAttractions, useAttractions } from "./AttractionProvider.js";
import {attractionDetailsButton} from "../DetailsButton.js"

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
.then(attractionDetailsButton)
})


const render = (attraction) => {
    contentTarget.innerHTML = `
    <h3 class="previewHeading attraction__previewHeading">Current Attraction</h3>
        <div class="attraction__name">${attraction.name}</div>
        <button id="attractionDetails--${attraction.id}"> Click for Details </button>
            <dialog class= "attractionDialog--${attraction.id}">
            <h4>${attraction.name}</h4>
            <div class="attraction__address"> ${attraction.city}, ${attraction.state} </div>
            <h5>Description: </h5>
            <div class="attraction__description"> ${attraction.description} </div>
            <br></br>
            <div class ="attraction__restrooms">Restrooms: ${amenetiesRestrooms()} </div>
            <div class ="attraction__souvenirs">Souvenirs: ${amenetiesSouvenirs()} </div>
            
            <br></br>
            <button id"attractionDetailCloseButton">Close</button>
            </dialog>
    `
}

export const amenetiesSouvenirs = () => {
    if(amenetiesSouvenirs.souvenirs === true){
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