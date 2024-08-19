export const fetchWeather = async() => {

    const response = await fetch('/weather.json');
    const data = await response.json();
    return data;
  
  };
  