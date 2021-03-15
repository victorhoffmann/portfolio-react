import './style.css'

const Habilidades = () => {
    return (
        <div id='habilidades'>
            <section>
                <h2>Habilidades</h2>
                <article className='skills'>
                    <h3>Hard Skills</h3>
                    <ul>
                        <li><strong>Git</strong></li>
                        <li><strong>HTML</strong></li>
                        <li><strong>CSS</strong></li>
                        <li><strong>JS</strong></li>
                        <li><strong>Bootstrap (CSS/JS)</strong></li>
                        <li><strong>ReactJs</strong></li>
                    </ul>
                </article>
                <article className='skills'>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Trabalho em equipe</li>
                        <li>Proatividade</li>
                        <li>Boa comunicação</li>
                        <li>Grande empenho e dedicacão nas funções atribuidas</li>
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Habilidades