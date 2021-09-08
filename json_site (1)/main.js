function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

async function getUsers(numberOfUsers) {
    const data = await fetch(`https://randomuser.me/api?results=${numberOfUsers}`)
    return await data.json();
}

async function showUsers(numberOfUsers) {
    const users = await getUsers(numberOfUsers);

    users.results.forEach((user) => {
        console.log(`Salut eu sunt ${user.name.title} ${user.name.first}-${user.name.last} din ${user.location.city}, ${user.location.country}`);
        console.log(`Coordonate: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`)
    })
}
showUsers(5);

async function getCountries() {
    const data1 = await fetch(`https://restcountries.eu/rest/v2/all`)
    return await data1.json();
}

async function showCapitals() {
    const countries = await getCountries();

    countries.forEach((country) => {
        console.log(`Tara asta este ${country.name}`);
        console.log(`Capitala ei este ${country.capital}, cu latitudinea de ${country.latlng[0]} si longitudinea de ${country.latlng[1]}`)
    })
}
showCapitals();