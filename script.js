const SUPABASE_URL = "https://eijgfrhkmcedwophfzpu.supabase.co";
const SUPABASE_KEY = "sb_publishable_JuQ6JCdE7TltkwzbbxLXKQ_0UbeCTbw";

async function submitReport()
{
let location = document.getElementById("location").value;

if(location === "")
{
alert("Please enter location");
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
"✅ Rescue request submitted successfully!";
}
else
{
document.getElementById("status").innerHTML =
"❌ Error submitting request";
}

}
