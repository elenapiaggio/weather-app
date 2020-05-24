const location = "Barcelona";

const api_key = "cee0c281dcb7298c5e4cb87bc06dca36";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
