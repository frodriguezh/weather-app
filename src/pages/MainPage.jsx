import React from 'react'
import { useHistory } from 'react-router-dom'
import  Paper  from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city: "Santiago", country: "Chile", countryCode: "CL"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Lima", country: "Perú", countryCode: "PE"}
]

const MainPage = () => {

    const history = useHistory();
    const onClickHandler = (city, countryCode) => {

        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} 
                    onClickCity={onClickHandler}/>
            </Paper>
           
        </AppFrame>
    )
}

export default MainPage
