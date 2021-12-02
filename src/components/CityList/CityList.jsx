import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

//funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry , weather) => {

    const { city, country } = cityAndCountry
    //const { temperature, state } = weather

    return (
    
        <ListItem 
            button
            key={city} 
            onClick={eventOnClickCity}>
            <Grid container 
                justifyContent="center" 
                alignItems="center">

                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                
                <Grid item md={10} xs={12}>
                    {
                        weather ?
                        <Weather 
                        temperature = {weather.temperature} 
                        state={weather.state} />
                        :
                        "No hay datos"
                    }
                </Grid>

            </Grid>
        </ListItem>
        
    )

}


const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setAllWeather] = useState({})

    useEffect(() => {

        const setWeather = (city, country, countryCode) => {

            const appid = "811bed139763af7e4f3428e936ed75fb"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
            axios
            .get(url)
            .then(response =>{

                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                const propName = `${city}-${country}`
                const propValue = { temperature , state }

                console.log("[propName]", propName)

                setAllWeather(allWeather => {
                    const result = { ...allWeather, [propName] : propValue }
                    console.log("allWeather [result]", result)
                    return result

                })
            })
            

        }

        cities.forEach(({ city, country, countryCode }) => {

            setWeather(city, country, countryCode)
                
        });
        
        
        
    }, [cities])

    //  const weather =  { temperature: 10, state: "sunny" }
    return (
        <List>
            { 
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
            }
        </List>
    )
}

CityList.propTypes = {

    cities: PropTypes.arrayOf(
        PropTypes.shape({

            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,

    onClickCity: PropTypes.func.isRequired,

}

export default CityList
