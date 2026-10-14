import styles from './hero.module.css'
import svgs from '../assets/hero/svg_navbar.png'

export function Hero() {
    return (
        <section className={styles.container_section}>
            <div className={styles.hero_text}>
                <p>CONFORTO QUE TE ACOMPANHA</p>

                <div className={styles.presentation_txt}>
                    <p>Especialistas em</p>
                    <p>ar condicionado</p>
                    <p>automotivo</p>
                </div>

                <div className={styles.true_txt}>
                    <p>qualidade, confiança e o melhor atendimento</p>
                    <p>para o seu veiculo</p>
                </div>

                <div className={styles.svg_icons}>
                    <img src={svgs} alt="" />
                </div>
            </div>
        </section>
    )
}