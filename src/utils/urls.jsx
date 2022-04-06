const appid = "811bed139763af7e4f3428e936ed75fb"

export const getWeatherUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

export const getForecastUrl = (city, countryCode) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`