import React, { useRef } from 'react'
import { ReactComponent as NavigateIcon } from './../assets/icons/navigateNext.svg';
import {useSlider} from "../hooks/useSlider";
import CardHourly from './CardHourly';
import "./../css/Hourly.css";

function Hourly({forecast, timezone, callback}) {

    // Creating refs for slider to access its properties
    const cardsRef = useRef(null);
    const cardsWrapperRef = useRef(null);
    const [moveLeft, moveRight] = useSlider(cardsRef, cardsWrapperRef);

    return (
        <div className="Hourly fill-block border boxShadow borderRadius">
            <p className="bodyText2">Прогноз на каждые 3 часа</p>

            <div className="Hourly-slider">
                <div className="Hourly-slider__icon" onClick={moveLeft}>
                    <NavigateIcon width="24px" height="24px" transform='rotate(180)' />
                </div>

                <div className="Hourly-slider-cardsWrapper" ref={cardsWrapperRef}>    
                    <ul className="Hourly-slider-cards" ref={cardsRef}>
                        {forecast.map((item, index) => {
                            return (
                                <CardHourly 
                                    forecast={item}
                                    timezone={timezone}
                                    index={index}
                                    key={Date.now() + index}
                                    onClick={() => {callback(index)}}
                                />
                            );      
                        })}
                    </ul>
                </div>

                <div className="Hourly-slider__icon" onClick={moveRight}>
                    <NavigateIcon width="24px" height="24px" />
                </div>
            </div>
        </div>
    )
}

export default Hourly
