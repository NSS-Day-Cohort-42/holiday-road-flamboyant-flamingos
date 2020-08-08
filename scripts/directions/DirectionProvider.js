import keyObj from "../Settings.js"


let routeData = []
const nashvilleCoordinates = `36.174465,-86.767960`

export const useRouteDataCopy = () => {
    return routeData.slice()
}

export const getDirections = () => {
    return fetch(`https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=37.7970179912726,-84.5981683059999&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`)
        .then(response => response.json())
        .then(parsedRouteData => {
            routeData = parsedRouteData.paths
        })
}
