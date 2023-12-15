import renderModule from "./print";

const logicModule = (location) => {
  const apiKey = "8589d28f885443ffbd1204158230912";

  let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    // getting current temperature
    const currentTemp = await data.current.temp_c;
    const currentFeelTemp = await data.current.feelslike_c;
    renderModule().renderTemp(currentTemp, currentFeelTemp);

    // getting the current location
    const currentCity = await data.location.name;
    const currentCountry = await data.location.country;
    const currentLocation = `${currentCity}, ${currentCountry}`;
    renderModule().renderLocation(currentLocation);

    // getting the weather condition
    const currentWeatherCondition = await data.current.condition.text;
    renderModule().renderCondition(currentWeatherCondition);

    // getting day cicle data
    const isDay = await data.current.is_day;
    renderModule().switchBackground(isDay);
  }
  getData();
};

export { logicModule };
