import keyObj from "../Settings.js";
import { getAttractions } from "../attractions/AttractionProvider.js";

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
  console.log(attractionLocation);

  currentParkCoordinates = `${currentParkLat},${currentParkLong}`;

  getEateryCoordinates()
    .then(() => {
      const eateryCoordinateData = useEateryCoordinateCopy(); //useEaterycoordinate
      const eateryLat = parseFloat(eateryCoordinateData[0].point.lat);
      const eateryLong = parseFloat(eateryCoordinateData[0].point.lng);

      currentEateryCoordinates = `${eateryLat},${eateryLong}`;
    }).then( () => {
        getAttractionCoordinates()
        .then(()=> {
        const attractionCoordinateData = useEateryCoordinateCopy(); //useEaterycoordinate
        const attractionLat = parseFloat(attractionCoordinateData[0].point.lat);
        const attractionLong = parseFloat(attractionCoordinateData[0].point.lng);
    
        currentAttractionCoordinates = `${attractionLat},${attractionLong}`;    
        })
    })
    .then(() => {
      getDirections().then(() => {
        const routeArray = useRouteDataCopy();
        const arrayOfDirections = routeArray[0].instructions;
        contentTarget.innerHTML = `${arrayOfDirections.map(
          (directionObject) => {
            return directionObject.text;
          }
        )}`;
      });
    });//try here
});

//route data fetch
let routeData = [];
const nashvilleCoordinates = `36.174465,-86.767960`;

const useRouteDataCopy = () => {
  return routeData.slice();
};

const getDirections = () => {
  return fetch(
    `https://graphhopper.com/api/1/route?point=${nashvilleCoordinates}&point=${currentParkCoordinates}&point=${currentEateryCoordinates}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${keyObj.graphhopperKey}`
  )
    .then((response) => response.json())
    .then((parsedRouteData) => {
      routeData = parsedRouteData.paths;
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
let attractionCoordinateData = []

const getAttractionCoordinates = () => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=${attractionLocation}&locale=us&debug=true&key=${keyObj.graphhopperKey}`)
    .then(response => response.json())
    .then(parsedAttractionCoordinateData => {
        attractionCoordinateData = parsedAttractionCoordinateData.hits
    })
}

const useAttractionCoordinateCopy = () => {
    return attractionCoordinateData.slice()
}
