import React from 'react'
import  Grid  from '@material-ui/core/Grid'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WheaterDetails from './../components/WheaterDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'



export const CityPage = () => {

    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]

    const forecastItemList = [
 
        { weekDay: "Jueves", hour: 18, state: "sunny", temperature: 17 },
        { weekDay: "Viernes", hour: 6, state: "cloud", temperature: 18 },
        { weekDay: "Viernes", hour: 12, state: "fog", temperature: 18 },
        { weekDay: "Viernes", hour: 18, state: "cloudy", temperature: 19 },
        { weekDay: "Sábado", hour: 14, state: "rain", temperature: 17 },
        { weekDay: "Sábado", hour: 12, state: "rain", temperature: 17 },
    ]

    return (
        <AppFrame>
            <Grid container
            justifyContent="space-around"
            direction="column"
            spacing={2}>

                <Grid item container 
                    xs={12}
                    justifyContent="center"
                    alignItems="flex-end">
                    <CityInfo city={"Iquique"} country={"Chile"}/>
                </Grid>

                <Grid container item 
                    xs={12}
                    justifyContent="center">
                    <Weather temperature={10} state="cloud" />
                    <WheaterDetails humidity={80} wind= {10}/>
    
                </Grid>

                <Grid item>
                    <ForecastChart data={data}/>
                </Grid>

                <Grid item>
                    <Forecast forecastItemList = {forecastItemList}/>
                </Grid>

            </Grid>
        </AppFrame>
        
    )
}

export default CityPage