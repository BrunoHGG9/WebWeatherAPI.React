import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { fetchWeather } from './services/api.jsx';

function App() {

  const [weather, getWeather] = useState([])

  useEffect(() => {
    const carregaWeather = async () => {
      try {

        const dadosClima = await fetchWeather()
        getWeather(dadosClima)

      } catch (error) {

        console.error("Erro de acesso api: ", error);

      }
    }

    carregaWeather()
  }, [])


  return (


    <div id='all'>
      {weather.map((item) => (
        <div key={item.id} className="weather-card">
          <h2 className="city-name">{item.city}</h2>
          <div className="weather-info">
            <div className="temperature">
              <span className="temp-value">Temperatura: {item.temperature}°C</span>
            </div>
            <div className="conditions">
              <span className="cond-value">Condições Climáticas: {item.weather}</span>
            </div>
            <div className="icon">
              <span className="icon-value">Ícone: {item.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

  )


}

export default App
