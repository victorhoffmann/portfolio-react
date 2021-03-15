import './style.css'

const Formacao = () => {
    return (
        <div id='escolaridade'>
            <section>
                <h2>Formação Acadêmica</h2>
                <article className='escolaridade-item'>
                    <h3>Programador Web Full Stack</h3>
                    <p><span className='ano'>2020 - 2021</span> Digital House</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Bacharelado em Gerontologia</h3>
                    <p><span className='ano'>2017 - 2021</span> Universidade de São Paulo - USP</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Programador Web Front End</h3>
                    <p><span className='ano'>2020 - 2020</span> NEU - Núcleo de Empreendedorismo da USP</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Técnico em Redes de Computadores</h3>
                    <p><span className='ano'>2014 - 2015</span> ETEC Embu das Artes</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Curso de Implementação de Rede Local com Windows</h3>
                    <p><span className='ano'>2015</span> SENAC Taboão da Serra</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Ensino Médio</h3>
                    <p><span className='ano'>2013 - 2015</span> ETEC Uirapuru</p>
                </article>
                <article className='escolaridade-item'>
                    <h3>Ensino Básico e Fundamental</h3>
                    <p>EE Julieta Caldas Ferraz</p>
                </article>
            </section>
        </div>
    )
}

export default Formacao