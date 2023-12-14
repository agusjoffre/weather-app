const temperatureDOM = document.querySelector(".temperature");
const feelsLikeDOM = document.querySelector(".feels-like-temp");
const locationDOM = document.querySelector(".location");
const weatherDOM = document.querySelector(".weather");
const app = document.querySelector(".app");
const body = document.body;
const feelsLabel = document.querySelector(".feels-label");
const tempLabel = document.querySelector(".temp-label");

const renderModule = () => {
  function renderTemp(temp, feel) {
    temperatureDOM.textContent = `${temp}°`;
    feelsLikeDOM.textContent = `${feel}°`;
  }

  function renderLocation(location) {
    locationDOM.textContent = location;
  }

  function renderCondition(weather) {
    weatherDOM.textContent = weather;
  }

  function switchBackground(isDay) {
    if (isDay === 0) {
      // 0 = noche
      body.style.backgroundColor = "#141f30";
      app.classList.remove("app-day");
      app.classList.add("app-night");
      temperatureDOM.classList.add("card-night");
      feelsLikeDOM.classList.add("card-night");
      locationDOM.classList.add("card-night");
      weatherDOM.classList.add("card-night");
      feelsLabel.classList.add("card-night");
      tempLabel.classList.add("card-night");
    } else {
      body.style.backgroundColor = "white";
      app.classList.remove("app-night");
      app.classList.add("app-day");
      temperatureDOM.classList.remove("card-night");
      feelsLikeDOM.classList.remove("card-night");
      locationDOM.classList.remove("card-night");
      weatherDOM.classList.remove("card-night");
      feelsLabel.classList.remove("card-night");
      tempLabel.classList.remove("card-night");
    }
  }

  return { renderTemp, renderLocation, renderCondition, switchBackground };
};

export default renderModule;
