let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let city = prompt("Enter a City");
city = city.toLowerCase().trim();
let forecast = "It is currently ";
let temperature = "°C in ";
let percentHumidity = " with a humidity of ";
if (city === "paris") {
  alert(
    forecast +
      weather.paris.temp +
      temperature +
      "Paris" +
      percentHumidity +
      weather.paris.humidity +
      "%"
  );
} else {
  if (city === "tokyo") {
    alert(
      forecast +
        weather.tokyo.temp +
        temperature +
        "Tokyo" +
        percentHumidity +
        weather.tokyo.humidity +
        "%"
    );
  } else {
    if (city === "lisbon") {
      alert(
        forecast +
          weather.lisbon.temp +
          temperature +
          "Lisbon" +
          percentHumidity +
          weather.lisbon.humidity +
          "%"
      );
    } else {
      if (city === "san francisco") {
        alert(
          forecast +
            weather["san francisco"].temp +
            temperature +
            "San Fransisco" +
            percentHumidity +
            weather["san francisco"].humidity +
            "%"
        );
      } else {
        if (city === "moscow") {
          alert(
            forecast +
              weather.moscow.temp +
              temperature +
              "Moscow" +
              percentHumidity +
              weather.moscow.humidity +
              "%"
          );
        } else {
          alert(
            "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
          );
        }
      }
    }
  }
}
