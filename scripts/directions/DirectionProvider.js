import keyObj from "../Settings.js";

//global vars
const contentTarget = document.getElementById("directionsContainer");
const eventHub = document.querySelector(".container");

let currentParkCoordinates;
let currentEateryCoordinates;
let currentAttractionCoordinates;
let eateryLocation;
let attractionLocation;

//getdirections event listener
eventHub.addEventListener("getDirectionsButtonPressed", (customEvent) => {
  const currentParkLat = parseFloat(customEvent.detail.parkLat);
  const currentParkLong = parseFloat(customEvent.detail.parkLong);
  eateryLocation = customEvent.detail.currentEateryLocation;
  attractionLocation = customEvent.detail.currentAttractionLocation;
  currentParkCoordinates = `${currentParkLat},${currentParkLong}`;

  getEateryCoordinates() //1
    .then(() => {
      //open 2
      try {
        const eateryCoordinateData = useEateryCoordinateCopy();
        const eateryLat = parseFloat(eateryCoordinateData[0].point.lat);
        const eateryLong = parseFloat(eateryCoordinateData[0].point.lng);
        currentEateryCoordinates = `${eateryLat},${eateryLong}`;
      } catch (e) {
        console.log(e.name + e.message);
        return;
      }
    }) //close 2
    .then(() => {
      //open 3
      getAttractionCoordinates() //4
        .then(() => {
          //open 5
          const attractionCoordinateData = useAttractionCoordinateCopy();
          const attractionLat = parseFloat(
            attractionCoordinateData[0].point.lat
          );
          const attractionLong = parseFloat(
            attractionCoordinateData[0].point.lng
          );

          currentAttractionCoordinates = `${attractionLat},${attractionLong}`;
        }) //close 5
        .then(() => {
          //open 6
          getDirections() //7
            .then(() => {
              //open 8
              if (routeData) {
                renderDirections();
              } else
                alert("Sorry, directions not available. Google Maps much?");
            }); //close 8
        }); // close 6
    }); //close 3
});

const renderDirections = () => {
  const routeArray = useRouteDataCopy();
  const arrayOfDirections = routeArray[0].instructions;
  contentTarget.innerHTML = `
    <h2 class="directions__heading">Directions</h2>
      <button id="closeDirectionsButton">Close Directions</button>
      <section class="directionsList">
        ${arrayOfDirections
          .map((directionObject) => {
            return `<div class="direction">${directionObject.text}</div>`;
          })
          .join(" ")}
    </section>
    `;
};

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "closeDirectionsButton") {
    contentTarget.innerHTML = ""
  }
})

//route data fetch
let routeData = [];
const nashvilleCoordinates = `36.174465,-86.767960`;

const useRouteDataCopy = () => {
  return routeData.slice();
};

const getDirections = () => {
  return fetch(
    `https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=${currentEateryCoordinates}&point=${currentAttractionCoordinates}&point=${currentParkCoordinates}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`
  )
    .then((response) => response.json())
    .then((parsedRouteData) => {
      routeData = parsedRouteData.paths;
      console.log(routeData);
    });
};

//eatery coordinate fetch
let eateryCoordinateData = [];

const getEateryCoordinates = () => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${eateryLocation}&locale=us&debug=true&key=${keyObj.graphhopperKey}`
  )
    .then((response) => response.json())
    .then((parsedEateryCoordinateData) => {
      eateryCoordinateData = parsedEateryCoordinateData.hits;
    });
};

const useEateryCoordinateCopy = () => {
  return eateryCoordinateData.slice();
};

// attraction coordinate fetch
let attractionCoordinateData = [];

const getAttractionCoordinates = () => {
  return fetch(
    `https://graphhopper.com/api/1/geocode?q=${attractionLocation}&locale=us&debug=true&key=${keyObj.graphhopperKey}`
  )
    .then((response) => response.json())
    .then((parsedAttractionCoordinateData) => {
      attractionCoordinateData = parsedAttractionCoordinateData.hits;
    });
};

const useAttractionCoordinateCopy = () => {
  return attractionCoordinateData.slice();
};
