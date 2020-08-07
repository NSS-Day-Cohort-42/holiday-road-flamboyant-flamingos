let itineraries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  console.log(useItineraries())
  const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

  eventHub.dispatchEvent(itineraryStateChangedEvent)
}

export const saveItinerary = (itinerary) => {
    const jsonItinerary = JSON.stringify(itinerary)
  
    return fetch("http://localhost:8000/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonItinerary,
    })
      .then(getItineraries)
      .then(dispatchStateChangeEvent)
  }

  export const useItineraries = () => {
    return itineraries.slice()
  }
  
  export const getItineraries = () => {
    return fetch("http://localhost:8000/itineraries")
      .then((response) => response.json())
      .then((itinerariesArray) => {
        itineraries = itinerariesArray
      })
  }