import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Iquique", country: "Chile"},
    {city: "Tokio", country: "Japón"},
    {city: "Lima", country: "Perú"}
]

export const CityListExample = () => <CityList cities = {cities} onClickCity = {action("Click on city text")}/>