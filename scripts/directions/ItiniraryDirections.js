import { getParks, useParksCopy} from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "getDirections") {
        const [prefix, directionsParkName, directionsAttractionName, directionsEateryName] = clickEvent.target.parentNode.id.split("--")

        getParks()
            .then(() => {
                const parksArray = useParksCopy()
                
                const matchingPark = parksArray.find(parkObj => {
                    return (parkObj.name === directionsParkName)
                })

                const matchingParkLat = matchingPark.latitude
                const matchingParkLong = matchingPark.longitude

                console.log(matchingParkLat)
                console.log(matchingParkLong)

                

            })
            
    }
})



