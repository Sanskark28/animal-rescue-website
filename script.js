const SUPABASE_URL = "https://eijgfrhkmcedwophfzpu.supabase.co";
const SUPABASE_KEY = "sb_publishable_JuQ6JCdE7TltkwzbbxLXKQ_0UbeCTbw";

function getLocation()
{
if(navigator.geolocation)
{
navigator.geolocation.getCurrentPosition(showPosition, showError);
}
else
{
alert("Geolocation not supported");
}
}

function showPosition(position)
{
let lat = position.coords.latitude;
let lon = position.coords.longitude;

document.getElementById("location").value =
lat + ", " + lon;
}

function showError(error)
{
alert("Please allow location access");
}

async function submitReport()
{
let location = document.getElementById("location").value;

if(location === "")
{
alert("Please enter or get location");
return;
}

let response = await fetch(SUPABASE_URL + "/rest/v1/requests", {

method: "POST",

headers: {
"Content-Type": "application/json",
"apikey": SUPABASE_KEY,
"Authorization": "Bearer " + SUPABASE_KEY,
"Prefer": "return=minimal"
},

body: JSON.stringify({
location: location,
status: "pending"
})

});

if(response.ok)
{
document.getElementById("status").innerHTML =
"✅ Rescue request submitted!";
}
else
{
document.getElementById("status").innerHTML =
"❌ Database permission error (fix below)";
}

}
