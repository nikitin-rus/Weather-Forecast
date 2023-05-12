import React, { useEffect, useState } from 'react';
import { getTime, getDayOfWeek } from '../utils/utils';

import './../css/Timestamp.css';

function Timestamp({timezone}) {

    const [currentTime, setCurrentTime] = useState(Date.now() / 1000);

    function refreshTime() {
        setCurrentTime(Date.now() / 1000);
    }

    useEffect(() => {
        let timerId = setInterval(refreshTime, 60000);
    
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="Timestamp fill-block border boxShadow borderRadius">
            <p className="Timestamp__body">Локальное время: {getDayOfWeek(currentTime, timezone)}, {getTime(currentTime, timezone)}</p>
        </div>
    );
}

export default Timestamp;
