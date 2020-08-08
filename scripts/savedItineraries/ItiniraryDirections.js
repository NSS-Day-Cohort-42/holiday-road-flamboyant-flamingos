const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "getDirections") {
        const [prefix, directionsParkName, directionsAttractionName, directionsEateryName] = clickEvent.target.parentNode.id.split("-")
        
    }
})



