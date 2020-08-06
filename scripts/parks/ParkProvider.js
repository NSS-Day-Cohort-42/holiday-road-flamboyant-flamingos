import keyObj from "../Settings.js"

let parks = []

export const useParksCopy = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch(`http://localhost:8088/parks`)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}
