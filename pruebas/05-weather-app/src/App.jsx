import { useEffect, useState } from 'react'
import './style.css'
import { useCityWeather } from './hooks/useCityWeather'

export function App () {
  const [cityName, setCityName] = useState('')
  const { loading, error, cityWeather, showCityWeather } = useCityWeather()

  function updateCityName (event) {
    setCityName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    showCityWeather(cityName)
  }

  return (
    <main>
      <h1>Buscador del Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='cityInput'
          type='text'
          onChange={updateCityName}
          value={cityName}
          placeholder='Ingrese el nombre de la ciudad'
        />
        <button type='submit' disabled={!cityName.trim() || loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <p role='alert'>{error}</p>}

      {cityWeather && (
        <section className='cityCard'>
          <h2>{cityWeather.name}</h2>
          <div>
            <ul>
              <li><p> 🌡️ Temperatura: {cityWeather.temp}°C</p></li>
              <li><p> 💧 Humedad: {cityWeather.humidity}</p></li>
              <li><p> 🌬️ Velocidad del viento: {cityWeather.windSpeed}</p></li>

            </ul>
          </div>
        </section>
      )}
    </main>
  )
}
