import React, { useRef } from "react";
import { ReactComponent as ArrowIcon } from './../assets/icons/arrowForward.svg';
import { getTowns } from "../utils/utils";
import {useSlider} from "../hooks/useSlider";
import "./../css/Header.css";

function Header({callback}) {

    // Creating content ref
    const linksRef = useRef(null);
    
    // Creating contentWrapper ref
    const linksWrapperRef = useRef(null);
    
    // Using hook for slider logic
    const [moveLeft, moveRight] = useSlider(linksRef, linksWrapperRef);
    
    return (
        <div className="Header boxShadow border-bottom">
            <div className="Header-slider">
                <div className="Header-slider__icon" onClick={moveLeft}>
                    <ArrowIcon width="16px" height="16px" transform='rotate(180)' />
                </div>

                <div className="Header-slider-linksWrapper" ref={linksWrapperRef}>    
                    <ul className="Header-slider-links" ref={linksRef}>
                        {getTowns().map((townName, index) => {
                            return (
                                <li className="Header-slider-links__link"
                                    onClick={e => callback(e.target.getAttribute("town"))}
                                    key={Date.now() + index}
                                    town={townName}>
                                    {townName}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="Header-slider__icon" onClick={moveRight}>
                    <ArrowIcon width="16px" height="16px" />
                </div>
            </div>
        </div>
    )
}

export default Header

