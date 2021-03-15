import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMobile } from 'react-icons/fa'
import './style.css'

const Footer = () => {
    return (
        <footer>
            <p><strong>Programador Front End</strong></p>
            <span>Victor Hugo Araujo Hoffmann</span>
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
        </footer>
    )
}

export default Footer