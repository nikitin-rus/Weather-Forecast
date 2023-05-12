import React from 'react'
import "./../css/Footer.css"

function Footer() {
    return (
        <div className="Footer fill_50 border-top boxShadow">
            <div className="Footer-content">
                <p className='Footer-content__body bodyText3 light'>Data source: <a href="https://openweathermap.org/forecast5">openweathermap.org</a></p>
                <p className='Footer-content__body bodyText3 light'>GitHub: <a href='https://github.com/setupedf'>setupedf</a></p>
            </div>
        </div>
    )
}

export default Footer
