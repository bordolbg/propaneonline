function loadServiceVehicles() {
	var serviceVehiclesUl = document.getElementById("service_vehicles");
	var serviceVehiclesLi = document.createElement("li");
	var serviceVehiclesLi2 = document.createElement("li");
	serviceVehiclesLi.appendChild(document.createTextNode("Vehicle 1"));
	serviceVehiclesUl.appendChild(serviceVehiclesLi);

	serviceVehiclesLi2.appendChild(document.createTextNode("Vehicle 2"));
	serviceVehiclesUl.appendChild(serviceVehiclesLi2);
}

function loadTransportationVehicles() {
	var transportationVehiclesUl = document.getElementById("transportation_vehicles");
}

function loadTankerVehicles() {
	var tankerVehiclesUl = document.getElementById("tanker_vehicles");
}

function loadDashboard() {
	break;
}