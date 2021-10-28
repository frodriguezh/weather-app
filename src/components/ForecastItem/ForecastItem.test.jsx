import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'

test("ForecastlItem renden", async () => {

    const { findByText } = render(<ForecastItem weekDay="Lunes" hour={10} state="sunny" temperature={25} />)

    const hour = await findByText(/10/)
    const temperature = await findByText(/25/)

    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("25")
})