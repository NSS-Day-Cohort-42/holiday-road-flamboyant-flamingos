const contentTarget = document.getElementById("directionsContainer")
import keyObj from "../Settings.js"

let currentParkCoordinates

const eventHub = document.querySelector(".container")
eventHub.addEventListener("getDirectionsButtonPressed", customEvent => {
    const currentParkLat = parseFloat(customEvent.detail.parkLat)
    const currentParkLong = parseFloat(customEvent.detail.parkLong)

    currentParkCoordinates = `${currentParkLat},${currentParkLong}`


    getDirections()
        .then(()=> {
            const routeArray = useRouteDataCopy()
            const arrayOfDirections = routeArray[0].instructions
            contentTarget.innerHTML = `${
                arrayOfDirections.map(directionObject => {
                    return directionObject.text
                })
            }`

            console.log(routeArray[0].instructions)
        })

})




let routeData = []
const nashvilleCoordinates = `36.174465,-86.767960`

export const useRouteDataCopy = () => {
    return routeData.slice()
}

export const getDirections = () => {
    return fetch(`https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=${currentParkCoordinates}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedRouteData => {
            routeData = parsedRouteData.paths
        })
}
