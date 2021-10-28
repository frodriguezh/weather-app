import React, { Component } from 'react'
import WeatherDetails from './WeaterDetails'

export default {
    title: "WeatherDetails",
    Component: WeatherDetails
}


export const WeatherDetailsExample = () =>  (
    <WeatherDetails humidity={80} wind= {10} />
)