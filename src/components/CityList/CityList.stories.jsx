import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Santiago", country: "Chile"},
    {city: "Buenos Aires", country: "Argentina"},
    {city: "Lima", country: "Peru"}
]

export const CityListExample = () => <CityList cities = {cities} onClickCity = {action("Click on city text")}/>