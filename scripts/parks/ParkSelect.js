import { useParksCopy, getParks } from "./ParkProvider.js";

const contentTarget = document.querySelector(".parks__selector");
const eventHub = document.querySelector(".container");

contentTarget.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "parkSelect") {
    const customEvent = new CustomEvent("parkSelected", {
      detail: {
        name: changeEvent.target.value,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

const render = (parksCollection) => {
  contentTarget.innerHTML = `
    <select class= "dropdown" id="parkSelect">
        <option value="0">Choose a National Park...</option>
        ${parksCollection
          .map((parksObj) => {
            return `<option value="${parksObj.name}"> ${parksObj.name}</option>`;
          })
          .join("")}
    </select>
    `;
};

export const parksSelect = () => {
  getParks().then(() => {
    const parks = useParksCopy();

    render(parks);
  });
};
