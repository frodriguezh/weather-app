import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

const cities = [
    {city: "Iquique", country: "Chile"},
    {city: "Tokio", country: "Japón"},
    {city: "Lima", country: "Perú"}
]

const MainPage = () => {

    const history = useHistory();
    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <div>
            <h2>Lista de ciudades</h2>
            <CityList cities={cities} 
                    onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
