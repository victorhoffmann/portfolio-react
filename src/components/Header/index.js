import './style.css'
import React, { useState } from 'react'

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
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                <div className={`ball ball-${tema}`}></div>
                </label>
            </div>

            <div className='links'>
                <ul>
                    <li><a href='#inicio' className={`text-${tema}`}>Inicio</a></li>
                    <li><a href='#sobre' className={`text-${tema}`}>Sobre</a></li>
                    <li><a href='#projetos' className={`text-${tema}`}>Projetos</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header