//Module to get current location

export function initGeolocation() {
    if (navigator.geolocation) {
        // Call getCurrentPosition with success and failure callbacks
        navigator.geolocation.getCurrentPosition(success, fail);
    }
    else {
        document.getElementById('long').value = "";
        document.getElementById('lat').value = "";
    }
}
//If succesfull
function success(position) {
    document.getElementById('long').value = position.coords.longitude;
    document.getElementById('lat').value = position.coords.latitude;
}
//If fails
function fail() {
    // Could not obtain location
    //alert("All wrong!");
    document.getElementById('long').value = "";
    document.getElementById('lat').value = "";
}