import React, { useState } from 'react';
import {ReactComponent as SearchIcon} from './../assets/icons/search.svg';
import {ReactComponent as CloseIcon} from './../assets/icons/close.svg';
import Input from './Input';
import "./../css/Search.css";

function Search({callback}) {

    // Set state for input value in input component 
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="Search">
            <label htmlFor="locationInput" className="Search__label">Введите город или район</label>

            <div className="Search-block fill-block border borderRadius boxShadow">
                <Input
                    type="text"
                    id="locationInput"
                    className="Search-block__input" 
                    placeholder="Например, Москва"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            callback(inputValue);

                            // Clear input value when searched
                            setInputValue("");
                        }
                    }}
                />

                <button className="Search-block__btn Search-block__btn_close" 
                        onClick={() => setInputValue("")}>

                    <CloseIcon className="Search-block__btn-icon" width="16px" height="16px" fill="#212121"/>
                </button>

                <button className="Search-block__btn Search-block__btn_search" 
                        onClick={() => {
                            callback(inputValue);

                            // Clear input value when searched
                            setInputValue("");
                        }}>

                    <SearchIcon className="Search-block__btn-icon" width="20px" height="20px" fill='white'/>
                </button>
            </div>
        </div>
    )
}

export default Search;
