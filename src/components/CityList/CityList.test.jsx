import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from '../CityList/CityList'

const cities = [
    {city: "Iquique", country: "Chile"},
    {city: "Tokio", country: "Japón"},
    {city: "Lima", country: "Perú"}
]

test("CityList render", async () => {

    const fnClickOnItemError = jest.fn()

    const { findAllByRole } = render(<CityList cities = {cities} onClickCity={fnClickOnItemError}/>)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(3)
})

test("CityList click on item", async () => {

    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    //simular accion
    fireEvent.click(items[0])

    //que pasará, llamar funcion fnClickOnItem

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

    
})