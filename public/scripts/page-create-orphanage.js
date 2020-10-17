// Create map
const map = L.map("mapid").setView([-12.9275838, -38.5019936], 15);

// Create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //Remove icon
  marker && map.removeLayer(marker);

  //Add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Add photo field
function addPhotoField() {
  //pick up the photo container #images
  const container = document.querySelector("#images");

  //take the container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //Clone the last image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];

  // Check if the field is empty
  if (input.value == "") {
    return; //Stop running the function
  }

  //clear the field before adding it to the image container
  input.value = "";

  //Add the clone to the image container of #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //clear the field value
    span.parentNode.children[0].value = "";
    return;
  }

  //delete the field
  span.parentNode.remove();
}

function toggleSelect(event) {
  //remove the .active class from the buttons
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //get the button clicked
  const button = event.currentTarget;
  button.classList.add("active");

  //update the input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  const lat = document.querySelector("[name=lat]").value;
  const lng = document.querySelector("[name=lng]").value;

  
  if (lat == "" || lng == "") {
    alert("Marque um ponto no mapa!");
   
    event.preventDefault();
  } 
  
}