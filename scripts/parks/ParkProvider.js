let parks = []

export const useParksCopy = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=NCmlA6czOzmcPgcxI0P7hY53m2cLaepsPU0fS9k2")
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks
        })
}
