import styles from "./about.module.css";
import icons from "../assets/abbout_us/icons_abbout_us.png";
import ofc_img from "../assets/abbout_us/img_oficina.png";

export function About() {
    return (
        <section
            className={styles.container}
            id="about_enterprise"
            aria-labelledby="about-heading"
        >
            <div className={styles.content}>
                <div className={styles.content_txt}>
                    <p className={styles.yellow_about}>
                        Sobre nós
                    </p>

                    <div className={styles.about_us_txt}>
                        <h2 id="about-heading">
                            Qualidade e experiência
                            <br />
                            <span className={styles.white_text}>
                                que
                            </span>{" "}
                            <span>fazem a diferença</span>
                        </h2>
                    </div>

                    <div className={styles.autoar_biography}>
                        <p>
                            A Auto Ar Jr é especializada em ar-condicionado
                            automotivo, oferecendo serviços para cuidar do
                            conforto e do desempenho do sistema de
                            climatização do seu veículo.
                        </p>

                        <p>
                            Trabalhamos com equipamentos modernos e
                            profissionais especializados para realizar
                            serviços de manutenção e reparo em sistemas
                            de ar-condicionado automotivo.
                        </p>
                    </div>

                    <div className={styles.icons}>
                        <img
                            src={icons}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>

                    <div className={styles.button_know_more}>
                        <a
                            className={styles.btn_know_more}
                            href="/sobre-nos"
                            aria-label="Conheça mais sobre a Auto Ar Jr"
                        >
                            CONHEÇA MAIS SOBRE NÓS
                            <span aria-hidden="true"> →</span>
                        </a>
                    </div>
                </div>

                <div className={styles.about_us_img}>
                    <img
                        src={ofc_img}
                        alt="Oficina da Auto Ar Jr especializada em ar-condicionado automotivo"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}