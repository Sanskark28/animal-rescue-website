function previewImage(event)
{
let image = document.getElementById("preview");
image.src = URL.createObjectURL(event.target.files[0]);
}

function getLocation()
{
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(showPosition);
}
}

function showPosition(position)
{
let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").value =
lat + ", " + lon;

document.getElementById("map").innerHTML =
'<iframe width="100%" height="200" src="https://maps.google.com/maps?q='
+ lat + ',' + lon +
'&z=15&output=embed"></iframe>';
}

function submitReport()
{
localStorage.setItem("rescueStatus",
"Request submitted. Rescuer coming.");

document.getElementById("status").innerHTML =
"Request submitted successfully";
}
