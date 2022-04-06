import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCityCode } from './../utils/utils'
import { getWeatherUrl } from './../utils/urls'
import { toCelsius } from  './../utils/utils'


const useCityList = (cities) => {

    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState()

    useEffect(() => {

        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl(city, countryCode)
            try {
                
                const response = await axios.get(url)
                const { data } = response
                const temperature = Number(toCelsius(data.main.temp))
                const state = data.weather[0].main.toLowerCase()
                const propName = getCityCode(city, countryCode)
                const propValue = { temperature , state }

                setAllWeather(allWeather => {
                    const result = { ...allWeather, [propName] : propValue }
                    return result

                })
                    
            } catch (error) {

                if(error.response){

                    setError("Hay un error con el servidor")
    
                }else if(error.request){
    
                    setError("Sin internet")
    
                }else{
    
                    setError("Ponte a rezar")
                }
    
                
            }   
            
        }

        cities.forEach(({ city, countryCode }) => {

            setWeather(city, countryCode)
                
        });
        
        
        
    }, [cities])

    return { allWeather, error, setError }
}

export default useCityList