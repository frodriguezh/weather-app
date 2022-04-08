
const cities = [

    {city: "Santiago", country: "Chile", countryCode: "CL"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Lima", country: "Perú", countryCode: "PE"}
]


export const getCities = () => cities

export const getCountryNameByCountryCode = (countryCode) => cities.filter( c => c.countryCode === countryCode)[0].country