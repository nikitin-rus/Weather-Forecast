import React from 'react';
import Icon from './Icon';
import { getTime, capitalizeFirstLetter, getProcessedTemp, getAsPercents, getDayOfWeek } from '../utils/utils';
import "./../css/Weather.css";

function Weather({city, forecast}) {

    return (
        <div className="Weather fill-block border boxShadow borderRadius">
            <div className="Weather-header">
                <p className="bodyText1 medium">{city.name}, ({city.country})</p>
                <p className="bodyText2 regular">Прогноз на {getTime(forecast.dt, city.timezone)}, {getDayOfWeek(forecast.dt, city.timezone)}</p>
            </div>

            <div className="Weather-temp">
                <div className="Weather-temp-data">
                    <div className="Weather-temp-data__icon">
                        <Icon src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} draggable={false}/>
                    </div>
                    <p className="Weather-temp-data__body">{getProcessedTemp(forecast.main.temp)}°</p>
                </div>
                <p>{capitalizeFirstLetter(forecast.weather[0].description)}, ощущается как {getProcessedTemp(forecast.main.feels_like)}°</p>
            </div>

            <div className="Weather-data">
                <div className="Weather-data-column">
                    <div className="Weather-data-column-row border-bottom">
                        <p>Скорость ветра</p>
                        <p className="medium">{forecast.wind.speed} м/c</p>
                    </div>
                    <div className="Weather-data-column-row border-bottom">
                        <p>Порывы ветра</p>
                        <p className="medium">{forecast.wind.gust} м/c</p>
                    </div>
                    <div className="Weather-data-column-row border-bottom">
                        <p>Влажность</p>
                        <p className="medium">{forecast.main.humidity} %</p>
                    </div>
                    <div className="Weather-data-column-row">
                        <p>Вероятность осадков</p>
                        <p className="medium">{getAsPercents(forecast.pop)} %</p>
                    </div>
                </div>

                <div className="Weather-data-column">
                    <div className="Weather-data-column-row border-bottom">
                        <p>Облачность</p>
                        <p className="medium">{forecast.clouds.all} %</p>
                    </div>
                    <div className="Weather-data-column-row border-bottom">
                        <p>Видимость</p>
                        <p className="medium">{forecast.visibility} m</p>
                    </div>
                    <div className="Weather-data-column-row border-bottom">
                        <p>Давление</p>
                        <p className="medium">{forecast.main.pressure} hPa</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;
