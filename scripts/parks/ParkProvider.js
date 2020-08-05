import keyObj from "../Settings.js"

let parks = []

export const useParksCopy = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keyObj.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks.data
        })
}
