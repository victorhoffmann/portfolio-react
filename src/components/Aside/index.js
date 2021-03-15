import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMobile } from 'react-icons/fa'

import './style.css'
import perfil from '../../assets/vh-perfil.jpg'

const Aside = () => {
    return (
        <aside id='inicio'>
            <div className="container">
                <div className="card">
                    <div className="content">
                        <div className="img">
                            <img src={perfil} alt="Foto de Victor Hoffmann"/>
                        </div>
                        <div className="contentPs">
                            <h3>Victor Hoffmann</h3>
                            <h4><span>Programador Front-end</span></h4>
                        </div>
                    </div>
                    <ul className="icons">
                        <li>
                            <a href="https://github.com/victorhoffmann" target='_blank' title='Visitar meu Github'> <FaGithub /> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/victorhoffmann/" target='_blank' title='Visitar meu Linkedin'> <FaLinkedin /></a>
                        </li>
                        <li>
                            <a href="mailto:viictorhoffmann@gmail.com?subject=Quero%20te%20contratar!" title="Mandar email para Victor Hoffmann"> <FaEnvelope /></a>
                        </li>
                        <li>
                            <a href="tel:+5511974000707" target="_blank" rel="noopener noreferrer" title="Ligar para Victor Hoffmann"> <FaMobile /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside