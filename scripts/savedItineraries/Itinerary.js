const itinerary = (itineraryObjectArray) => {
    return `
        <section id="itinerary--${itineraryObjectArray.id}" class="card itineraryCard">
            <div class="itineraryItes itineraryItem__park">${itineraryObjectArray.parkName}</div>
            <div class="itineraryItem itineraryItem__attraction">${itineraryObjectArray.attractionName}</div>
            <div class="itineraryItem itineraryItem_eatery">${itineraryObjectArray.eateryName}</div>
        </section>
    `
}