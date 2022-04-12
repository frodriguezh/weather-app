import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import 'moment/locale/es'
import { getForecastUrl } from './../utils/urls'
import getCharData from './../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'



const useCityPage = (allChartData, allForecastItemList, actions) => {


    const { city, countryCode } = useParams()

    useEffect(() => {
    
        const getForecast = async () => {
            
            const url = getForecastUrl(city, countryCode)

            const cityCode = getCityCode(city, countryCode)

            try {
    
                const { data } = await axios.get(url)

                const { dataAux } =  getCharData(data)
                
                actions({ type: "SET_CHART_DATA", payload: { [cityCode]: dataAux } })
                //onSetChartData({[cityCode]: dataAux})    

                const { forecastItemListAux } =  getForecastItemList(data)
               
                actions({ type: "SET_FORECAST_ITEM_LIST", payload: { [cityCode]: forecastItemListAux} })
                //actions({ type: "SET_FORECAST_ITEM_LIST", payload: { [cityCode]: forecastItemListAux} })
                //onSetForecastItemList({[cityCode]: forecastItemListAux})

            } catch (error) {

                console.log("error")
            }
            
        }

        const cityCode = getCityCode(city, countryCode)

        if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode] ){
            getForecast()
        }
      

    }, [city, countryCode, actions, allChartData, allForecastItemList])
    
    return {  city, countryCode }
}

export default useCityPage