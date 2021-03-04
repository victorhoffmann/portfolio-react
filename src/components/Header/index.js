import './style.css'
import React, { useState } from 'react'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    const [tema, setTema] = useState('dark')

    const toggleTema = () => {
        let novoTema = tema === 'dark' ? 'light' : 'dark'
        setTema(novoTema)
    }

    return (
        <header className={`header header-${tema}`}>
            <div className='toggle'>
                <input type="checkbox" class="checkbox" id="btnSwitch" 
                    onClick={() => toggleTema()}
                />
                <label className={`label label-${tema}`} for="btnSwitch">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                <div className={`ball ball-${tema}`}></div>
                </label>
            </div>

            <div className='links'>
                <ul>
                    <li><a href='#header' className={`text-${tema}`}>Inicio</a></li>
                    <li><a href='#sobre' className={`text-${tema}`}>Sobre</a></li>
                    <li><a href='#projetos' className={`text-${tema}`}>Projetos</a></li>
                    <li><a href='#contato' className={`text-${tema}`}>Contato</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header