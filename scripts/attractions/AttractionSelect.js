import { getAttractions, useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractions__selector")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", (changeEvent) => {
    if(changeEvent.target.id === "attractionSelect") {
        const customEvent= new CustomEvent("attractionSelected", {
            detail: {
                name: changeEvent.target.value
            }
    })
    eventHub.dispatchEvent(customEvent)
    }
})



export const AttractionSelect = () => { 
    getAttractions().then(() => {
        const attractions = useAttractions()

        render(attractions)
    })

        
    const render = attractionCollection => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="attractionSelect">
                <option value="0">Attractions</option>
                ${
                    attractionCollection.map(
                        attractionObject => {
                            return `<option value="${ attractionObject.name }">${attractionObject.name} - ${attractionObject.city}, ${attractionObject.state}</option>`
                        }
                    ).join("") 
                }
            </select>
        `
    }
}