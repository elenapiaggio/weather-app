import axios from "axios";

class OpenWeatherService {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.openweathermap.org/data/2.5",
    });
  }

  get() {
    return this.axios.get("/books").then(({ data: books }) => books);
  }
}

const weatherService = new OpenWeatherService();
export default weatherService;