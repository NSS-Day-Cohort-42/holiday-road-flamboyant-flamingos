import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".eateries__selector")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "eaterySelect") {
        const customEvent= new CustomEvent("eaterySelected", {
            detail: {
                businessName: changeEvent.target.value
            }
    })
    eventHub.dispatchEvent(customEvent)
    }
})

const render = (eateriesCollection) => { 
    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Choose an Eatery...</option>
            ${
                eateriesCollection.map(
                    eateryObj => {
                        return `<option value="${eateryObj.businessName}">${eateryObj.businessName} - ${eateryObj.city}, ${eateryObj.state}</option>`
                    }
                ).join("") //prevents "," from showing up. (makes outcome a string instead of an array)
            }
        </select>
        `
}

export const EaterySelect = () => {
        getEateries().then(() => {

            const eateries = useEateries()
            
            render(eateries)
        })

}