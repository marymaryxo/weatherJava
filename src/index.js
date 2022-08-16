let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here

let city = prompt("Enter a city?");
city = city.toLowerCase();
city = city.trim();

weather.paris.temp = Math.round(weather.paris.temp);
weather.tokyo.temp = Math.round(weather.tokyo.temp);
weather.lisbon.temp = Math.round(weather.lisbon.temp);
weather["san francisco"].temp = Math.round(weather["san francisco"].temp);

if (weather[city] !== undefined) {
  let cTemperature = weather[city].temp;
  let fTemperature = (cTemperature * 9) / 5 + 32;
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${cTemperature}°C (${fTemperature}°F) in ${city} with a humidity of ${humidity}.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}.`
  );
}
