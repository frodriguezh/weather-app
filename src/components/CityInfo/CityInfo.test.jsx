import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //Componente que vamos a probar

test("CityInfo Render", async () => {

    //se trabaja => AAA

    //Arrange
    //Act
    const city = "Iquique"
    const country = "Chile"
    
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)
    //Assert
    //heading = h1, h2, h3
    const cityAndCountryComponents = await findAllByRole("heading")

    //¿cuando es correcto?

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})