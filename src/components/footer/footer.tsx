
import styles from "./footer.module.css";

import img_clock from "../assets/footer/clock.png";
import img_map from "../assets/footer/map_pin.png";
import img_phone from "../assets/footer/cellphone.png";
import img_whatsapp from "../assets/footer/whatsapp _icon.png";
import img_email from "../assets/footer/mail_icon.png";

import brand from "../assets/hero/logo_brand_together.png";
import facebook from "../assets/footer/facebook.png"
import yt from "../assets/footer/yt_icon.png"
import instagram from "../assets/footer/instagram_icon.png"

const mapUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Bar%C3%A3o+de+Alagoas,+298,+Vila+Itaim,+S%C3%A3o+Paulo+-+SP,+08120-000";

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>

                {/* Horário de funcionamento */}
                <article className={styles.card}>
                    <div className={styles.icon} aria-hidden="true">
                        <img src={img_clock} alt="" />
                    </div>

                    <div className={styles.card_content}>
                        <h2>Horário de Funcionamento</h2>

                        <div className={styles.work_time}>
                            <p>Segunda a Sexta</p>
                            <p>08:30 às 18:00</p>
                        </div>

                        <div className={styles.weekend}>
                            <p>Sábado</p>
                            <p>Fechado</p>
                        </div>
                    </div>
                </article>

                {/* Localização */}
                <article className={styles.card}>
                    <div className={styles.icon} aria-hidden="true">
                        <img src={img_map} alt="" />
                    </div>

                    <div className={styles.card_content}>
                        <h2>Onde Estamos</h2>

                        <address className={styles.address}>
                            Av. Barão de Alagoas, 298
                            <br />
                            Vila Itaim
                            <br />
                            São Paulo - SP, 08120-000
                        </address>

                        <a
                            className={styles.map_button}
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VER NO MAPA
                            <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </article>

                {/* Contato */}
                <article className={styles.card}>
                    <div className={styles.icon} aria-hidden="true">
                        <img src={img_phone} alt="" />
                    </div>

                    <div className={styles.card_content}>
                        <h2>Entre em Contato</h2>

                        <ul className={styles.contact_list}>
                            <li className={styles.contact_item}>
                                <img src={img_whatsapp} alt="" />
                                <a
                                    href="https://wa.me/5511947272232"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp: (11) 94727-2232"
                                >
                                    (11) 94727-2232
                                </a>
                            </li>

                            <li className={styles.contact_item}>
                                <img src={img_email} alt="" />
                                <a href="mailto:autoarjr@gmail.com">
                                    autoarjr@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

            </div>

            {/* Rodapé inferior */}
            <div className={styles.footer_end}>

                <a
                    href="#start_enterprise"
                    className={styles.logo_brand}
                    aria-label="Auto Ar JR - Página inicial"
                >
                    <img src={brand} alt="" />
                </a>

                <p className={styles.copyright}>
                    © 2026 Auto Ar JR - Todos os direitos reservados.
                </p>

                <div className={styles.social_icons} aria-label="Redes sociais">
                    {/* Futuros ícones */}
                    <div className={styles.social_item}>
                        <img src={facebook} alt="" />
                    </div>
                    <div className={styles.social_item}>
                        <img src={yt} alt="" />
                    </div>
                    <div className={styles.social_item}>
                        <img src={instagram} alt="" />
                    </div>
                </div>

            </div>
        </footer>
    );
}
