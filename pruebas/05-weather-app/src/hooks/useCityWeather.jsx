import { useState } from 'react'
const WEATHER_API_PREFIX = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=247ed32f901c0ef47c29ab97a3ea7377&units=metric'

export const useCityWeather = () => {
  const [cityWeather, setCityWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const showCityWeather = async function (cityName) {
    if (cityName.trim() === '') return

    setLoading(true)
    setError(null)
    setCityWeather(null)

    try {
      const response = await fetch(WEATHER_API_PREFIX + cityName + API_KEY)
      if (!response.ok) {
        throw new Error('Ciudad no encontrada')
      }
      const data = await response.json()
      setCityWeather({
        name: data.name,
        temp: data.main.temp.toFixed(1),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      })
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return {
    loading,
    error,
    cityWeather,
    showCityWeather
  }
}
