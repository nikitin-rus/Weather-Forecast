import axios from "axios";

export default class Service {

    // Fetches and returns weather data (as promise)
    static async getWeather(town) {
        const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
            params: {
                q: town,
                appid: process.env.REACT_APP_API_KEY,
                units: "metric",
                lang: "ru"
            }
        });
        
        return response;
    }
}