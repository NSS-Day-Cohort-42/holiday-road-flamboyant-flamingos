export const itinerary = (itineraryObject) => {
    return `
        <section id="itinerary--${itineraryObject.id}" class="card itineraryCard">
            <div class="itineraryItes itineraryItem__park">${itineraryObject.parkName}</div>
            <div class="itineraryItem itineraryItem__attraction">${itineraryObject.attractionName}</div>
            <div class="itineraryItem itineraryItem_eatery">${itineraryObject.eateryName}</div>
        </section>
    `
}