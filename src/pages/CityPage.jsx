import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from '../components/AppFrame/AppFrame'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WheaterDetails from './../components/WheaterDetails'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import useCityPage from './../hooks/useCityPage'

export const CityPage = () => {

    const { chartData, forecastItemList, city } = useCityPage()

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
                    <CityInfo city={city} country={"Santiago"}/>
                </Grid>

                <Grid container item 
                    xs={12}
                    justifyContent="center">
                    <Weather temperature={10} state="clouds" />
                    <WheaterDetails humidity={80} wind= {10}/>
    
                </Grid>

                <Grid item>
                    { chartData && <ForecastChart data={chartData}/> }
                </Grid>

                <Grid item>
                    { forecastItemList && <Forecast forecastItemList = {forecastItemList}/> }
                </Grid>

            </Grid>
        </AppFrame>
        
    )
}

export default CityPage