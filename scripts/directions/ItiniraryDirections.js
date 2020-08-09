import { getParks, useParksCopy } from "../parks/ParkProvider.js";
import {
  getAttractions,
  useAttractions,
} from "../attractions/AttractionProvider.js";
import { getEateries, useEateries } from "../eateries/EateryProvider.js";

const eventHub = document.querySelector(".container");
let eateryLocation
let attractionLocation 

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.className === "getDirections") {
    const [
      prefix,
      directionsParkName,
      directionsAttractionName,
      directionsEateryName,
    ] = clickEvent.target.parentNode.id.split("--");

    getEateries() //1
      .then(() => { // open 2
        const eateriesArray = useEateries()
        const matchingEatery = eateriesArray.find(
            eateryObj => {
                return eateryObj.businessName === directionsEateryName
            }
        )

        eateryLocation = 
            `${matchingEatery.businessName}`
        
      }) // close 2
        .then(() => { //open3
            getAttractions() //4
                .then(() => { //open 5
                    const attractionsArray = useAttractions();
                    const matchingAttraction = attractionsArray.find(
                    (attractionObj) => {
                        return attractionObj.name === directionsAttractionName;
                        }
                    );

                    attractionLocation =
                    `${matchingAttraction.name}`
                }) // close 5
                .then(() => { //open 6
                    getParks() // 7
                    .then(() => { //open 8
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
                            currentEateryLocation: eateryLocation,
                            currentAttractionLocation: attractionLocation
                        },
                        }
                    );

                    eventHub.dispatchEvent(getDirectionsButtonEvent);
                }); //close 8
            }); //close 6
        });//close 3

  } //end if for event listener condition
}); //end listener



