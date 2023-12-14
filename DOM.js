import { logicModule } from "./logic";

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

const getInputValue = () => {
  const value = searchInput.value.toLowerCase();
  return value;
};

const getLocation = () => {
  searchButton.addEventListener("click", () => {
    const location = getInputValue();
    logicModule(location);
  });
};

export { getLocation };
