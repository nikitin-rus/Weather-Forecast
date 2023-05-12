import { useEffect, useState } from 'react';
import Service from '../API/service';
import Header from './Header';
import Weather from './Weather';
import Hourly from './Hourly';
import Timestamp from './Timestamp';
import Search from './Search';
import Footer from './Footer';
import { useFetching } from '../hooks/useFetching';

import './../css/App.css';

function App() {
  const [weather, setWeather] = useState();
  const [townToSearch, setTownToSearch] = useState("Москва");

  // Setting forecast index from weather list to display
  const [weatherIndex, setWeatherIndex] = useState(0);

  // Passing fetch function as callback into useFetching
  const [fetchWeather, isLoading, error] = useFetching(async (town) => {

    // GET request returns response object with data field
    let response = await Service.getWeather(town);

    setWeather(response.data);
  });

  useEffect(() => {
    fetchWeather(townToSearch);

    setWeatherIndex(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [townToSearch]);

  return (
    <div className="App">
      <Header callback={setTownToSearch} />

      <div className="App-main">
        <div className="App-container">
          <Search callback={(town) => {
            if (town) setTownToSearch(town);
          }} />

          {weather && !error && !isLoading &&
            <Timestamp timezone={weather.city.timezone} />
          }
        </div>

        {weather && !error && !isLoading &&
          <Weather
            city={weather.city}
            forecast={weather.list[weatherIndex]}
          />
        }

        {weather && !error && !isLoading &&
          <Hourly
            forecast={weather.list}
            timezone={weather.city.timezone}
            callback={setWeatherIndex}
          />
        }

        {error && <p className='bodyText2' style={{ margin: "40px 0" }}>Прогноз не найден! Попробуйте ввести другую локацию.</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
