import { useState, useEffect } from 'react'
import axios from 'axios'
import getAllWeather from '../utils/transform/getAllWeather'
import { getWeatherUrl } from './../utils/urls'
import { getCityCode } from '../utils/utils'



const useCityList = (cities, allWeather, actions) => {

    const [error, setError] = useState()

    useEffect(() => {

        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl(city, countryCode)
            try {

                const propName = getCityCode(city, countryCode)
                
                actions({ type: "SET_ALL_WEATHER", payload: { [propName]: {} } })

                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)
                
                actions({ type: "SET_ALL_WEATHER", payload: allWeatherAux })
                    
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

            if(!allWeather[getCityCode(city, countryCode)]){
                setWeather(city, countryCode)
            }
            
                
        });
        
        
        
    }, [cities, actions, allWeather])

    return {  error, setError }
}

export default useCityList