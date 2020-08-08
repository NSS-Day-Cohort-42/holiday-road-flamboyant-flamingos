import { getParks, useParksCopy} from "../parks/ParkProvider.js"
import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.className === "getDirections") {
        const [prefix, directionsParkName, directionsAttractionName, directionsEateryName] = clickEvent.target.parentNode.id.split("--")

    
        getAttractions()
                .then(() => {
                    const attractionsArray = useAttractions()
                    const matchingAttraction = attractionsArray.find( attractionObj => {
                        return (attractionObj.name === directionsAttractionName)
                    })

                    const attractionCity = matchingAttraction.city
                    const attractionState = matchingAttraction.state

                    console.log(attractionCity + attractionState)
                    return attractionCity
                }).then(() => { 
        
        
        getParks()
            .then(() => {
                const parksArray = useParksCopy()
                
                const matchingPark = parksArray.find(parkObj => {
                    return (parkObj.name === directionsParkName)
                })

                const matchingParkLat = matchingPark.latitude
                const matchingParkLong = matchingPark.longitude

                const getDirectionsButtonEvent = new CustomEvent ("getDirectionsButtonPressed", {
                    detail: {
                        parkLat: matchingParkLat,
                        parkLong: matchingParkLong,
                        attractionName: directionsAttractionName,
                        eateryName: directionsEateryName
                    }
                })

                eventHub.dispatchEvent(getDirectionsButtonEvent)
                })
            }) //end last .then?
            
    }
})

