import { getCityCode } from './../utils'
import { toCelsius } from  './../utils'

const getAllWeather = (response, city, countryCode) => {

    const { data } = response
    const temperature = Number(toCelsius(data.main.temp))
    const state = data.weather[0].main.toLowerCase()
    const humidity = data.main.humidity
    const wind =  data.wind.speed
    const propName = getCityCode(city, countryCode)
    const propValue = { temperature , state, humidity, wind }

    return ({[propName] : propValue})
}

export default getAllWeather