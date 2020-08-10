export const itinerary = (itineraryObject) => {
    return `
        <section id="getDirectionsFor--${itineraryObject.parkName}--${itineraryObject.attractionName}--${itineraryObject.eateryName}" class="card itineraryCard">
            <div class="itineraryItem itineraryItem__park">Park: ${itineraryObject.parkName}</div>
            <div class="itineraryItem itineraryItem__attraction">Attraction: ${itineraryObject.attractionName}</div>
            <div class="itineraryItem itineraryItem_eatery">Eatery: ${itineraryObject.eateryName}</div>
            <button class="getDirections">Get Directions</button>
            <button class="deleteItinerary" id="delete--${itineraryObject.id}">Delete Intinerary</button>
        </section>
    `
}       