import keyObj from "../Settings.js"

let currentCoordinates

const eventHub = document.querySelector(".container")
eventHub.addEventListener("getDirectionsButtonPressed", customEvent => {
    const currentParkLat = parseFloat(customEvent.detail.parkLat)
    const currentParkLong = parseFloat(customEvent.detail.parkLong)
    currentCoordinates = `${currentParkLat},${currentParkLong}`
    getDirections()
        .then(()=> {
            const routeArray = useRouteDataCopy()
            console.log(routeArray)
        })

})


let routeData = []
const nashvilleCoordinates = `36.174465,-86.767960`

export const useRouteDataCopy = () => {
    return routeData.slice()
}

export const getDirections = () => {
    return fetch(`https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=${currentCoordinates}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedRouteData => {
            routeData = parsedRouteData.paths
        })
}
