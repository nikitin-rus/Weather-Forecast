import React from 'react';
import Icon from './Icon';
import { getProcessedTemp, getTime, getDayOfWeek } from '../utils/utils';
import "./../css/CardHourly.css";

function CardHourly({forecast, timezone, onClick}) {
    return (
        <div className="CardHourly" onClick={onClick}>
            <div className="CardHourly-temp">
                <div className="CardHourly-temp__icon">
                    <Icon src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} draggable={false}/>
                </div>
                <p className="bodyText1">{getProcessedTemp(forecast.main.temp)}°</p>

            </div>
            
            <p className="CardHourly__body bodyText2 light">{getTime(forecast.dt, timezone)} {getDayOfWeek(forecast.dt, timezone)}</p>
        </div>
    );
}

export default CardHourly;
