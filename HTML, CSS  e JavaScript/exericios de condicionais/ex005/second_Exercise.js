function confirm(){ 
    let place = document.getElementById("place").value
    place = (place.toLowerCase())
    let ret = document.getElementById("ret")

    if (place != "bakery" && place != "bank" && place != "gym") {
        alert("[ERROR] choose one of the three options below.")
    } else {
        switch (place) {    
            case 'bakery':
                ret.innerHTML = "John goes to the bakery!";
                break;
            case 'bank':
                ret.innerHTML = "John goes to the bank";
                break;
            case 'gym':
                ret.innerHTML= "John goes to the gym";
                break;
            default:
                ret.innerHTML = "john goes to the house to sleep!";
        }

    }
}