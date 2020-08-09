const contentTarget = document.getElementById("directionsContainer")
import keyObj from "../Settings.js"

let currentParkCoordinates
let currentEateryCoordinates 
let eateryLocation
let attractionLocation

const eventHub = document.querySelector(".container")

eventHub.addEventListener("getDirectionsButtonPressed", customEvent => {
    const currentParkLat = parseFloat(customEvent.detail.parkLat)
    const currentParkLong = parseFloat(customEvent.detail.parkLong)
    eateryLocation = customEvent.detail.currentEateryLocation


    currentParkCoordinates = `${currentParkLat},${currentParkLong}`
    
    getEateryCoordinates()
    .then(() => {
        const coordinateTest = useCoordinateCopy()
        const coordinateTestLat = parseFloat(coordinateTest[0].point.lat)
        const coordinateTestLong = parseFloat(coordinateTest[0].point.lng)
        currentEateryCoordinates = `${coordinateTestLat},${coordinateTestLong}`

    }).then( () => {
        getDirections()
            .then(()=> {
                const routeArray = useRouteDataCopy()
                const arrayOfDirections = routeArray[0].instructions
                contentTarget.innerHTML = `${
                arrayOfDirections.map(directionObject => {
                    return directionObject.text
                    })
                }`
        
        })
    })
})

let routeData = []
const nashvilleCoordinates = `36.174465,-86.767960`

const useRouteDataCopy = () => {
    return routeData.slice()
}

const getDirections = () => {
    return fetch(`https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=${currentParkCoordinates}&point=${currentEateryCoordinates}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`)
    .then(response => response.json())
    .then(parsedRouteData => {
        routeData = parsedRouteData.paths
    })
}

let coordinateData = []

const getEateryCoordinates = () => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=${eateryLocation}&locale=us&debug=true&key=${keyObj.graphhopperKey}`)
    .then(response => response.json())
    .then(parsedCoordinateData => {
        coordinateData = parsedCoordinateData.hits
    })
}

const useCoordinateCopy = () => {
    return coordinateData.slice()
}

