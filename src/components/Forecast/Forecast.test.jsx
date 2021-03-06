import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
 
    { weekDay: "Jueves", hour: 18, state: "clear", temperature: 17 },
    { weekDay: "Viernes", hour: 6, state: "clouds", temperature: 18 },
    { weekDay: "Viernes", hour: 12, state: "clear", temperature: 18 },
    { weekDay: "Viernes", hour: 18, state: "clouds", temperature: 19 },
    { weekDay: "Sábado", hour: 14, state: "rain", temperature: 17 },
    { weekDay: "Sábado", hour: 12, state: "rain", temperature: 17 },
]

test("Forecast render", async () => {
    
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItem = await findAllByTestId("forecast-item-container")

    expect(forecastItem).toHaveLength(6)
})