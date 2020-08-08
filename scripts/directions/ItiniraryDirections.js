import { getParks, useParksCopy } from "../parks/ParkProvider.js";
import {
  getAttractions,
  useAttractions,
} from "../attractions/AttractionProvider.js";
import { getEateries, useEateries } from "../eateries/EateryProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.className === "getDirections") {
    const [
      prefix,
      directionsParkName,
      directionsAttractionName,
      directionsEateryName,
    ] = clickEvent.target.parentNode.id.split("--");

    getEateries()
      .then(() => {
        const eateriesArray = useEateries()
        const matchingEatery = eateriesArray.find(
            eateryObj => {
                return eateryObj.businessName === directionsEateryName
            }
        )
        
        console.log(matchingEatery)
      })
      .then(() => {
        getAttractions()
          .then(() => {
            const attractionsArray = useAttractions();
            const matchingAttraction = attractionsArray.find(
              (attractionObj) => {
                return attractionObj.name === directionsAttractionName;
              }
            );

            const attractionLocation =
              matchingAttraction.city + matchingAttraction.state;
            console.log(attractionLocation);
            return attractionLocation;
          })
          .then(() => {
            getParks().then(() => {
              const parksArray = useParksCopy();

              const matchingPark = parksArray.find((parkObj) => {
                return parkObj.name === directionsParkName;
              });

              const matchingParkLat = matchingPark.latitude;
              const matchingParkLong = matchingPark.longitude;

              const getDirectionsButtonEvent = new CustomEvent(
                "getDirectionsButtonPressed",
                {
                  detail: {
                    parkLat: matchingParkLat,
                    parkLong: matchingParkLong,
                    attractionName: directionsAttractionName,
                    eateryName: directionsEateryName,
                  },
                }
              );

              eventHub.dispatchEvent(getDirectionsButtonEvent);
            }); // close .then
          });
      });
  } //end if for event listener condition
}); //end listener


// const eateriesArray = useEateries();
// const matchingEatery = eateriesArray.find((eateryObj) => {
//   return eateryObj.name === directionsEateryName;
// });

// const eateryLocation = matchingEatery.city + matchingEatery.name;
// console.log(eateryLocation);
// // return eateryLocation;

