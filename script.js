function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

function(position){

let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").value =
lat + ", " + lon;

}

);

}

}

function submitReport(){

document.getElementById("status").innerHTML =
"Request submitted successfully";

}
