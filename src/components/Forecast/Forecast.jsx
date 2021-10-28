import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState' 

const renderForcastItem = forecast => {

    const { weekDay, hour, state, temperature } = forecast
  
    return (
        //Para listas se debe incorporar una key unica
        <Grid item 
            data-testid="forecast-item-container" 
            key={`${weekDay}${hour}`}>

            <ForecastItem  hour={hour} 
                weekDay={weekDay} 
                state={state} 
                temperature={temperature} 

            />

        </Grid>
    )

}

const Forecast = ({ forecastItemList }) => {
    return (
        <>
            <Grid container
                justifyContent="space-around"
                alignItems="center">
                {
                    forecastItemList.map(forecast => renderForcastItem(forecast))
                }
            </Grid>
        </>
    )
}

Forecast.propTypes = {

    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,        
    })).isRequired,

}

export default Forecast
