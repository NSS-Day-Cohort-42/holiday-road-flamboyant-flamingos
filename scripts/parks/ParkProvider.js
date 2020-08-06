let parks = []

export const useParksCopy = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch('http://localhost:8088/data')
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}
