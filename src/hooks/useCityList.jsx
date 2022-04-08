import { useState, useEffect } from 'react'
import axios from 'axios'
import getAllWeather from '../utils/transform/getAllWeather'
import { getWeatherUrl } from './../utils/urls'



const useCityList = (cities) => {

    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState()

    useEffect(() => {

        const setWeather = async (city, countryCode) => {

            const url = getWeatherUrl(city, countryCode)
            try {
                
                const response = await axios.get(url)

                const allWeatherAux = getAllWeather(response, city, countryCode)

                
                setAllWeather(allWeather =>  ({...allWeather, ...allWeatherAux }))
                
                    
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