import { getAttractions, useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractions__dropdown")



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
                            return `<option value="${ attractionObject.id }">${attractionObject.name} - ${attractionObject.city}, ${attractionObject.state}</option>`
                        }
                    ).join("") 
                }
            </select>
        `
    }
}