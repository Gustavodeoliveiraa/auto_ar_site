import styles from './header.module.css'

import brand from '../assets/hero/logo_brand_together.png'
import what_icon from '../assets/hero/contact_icon.png'

export function Header() {
    return (
        <header id='start_enterprise' className={styles.container}>
            <div className={styles.content}>

                <a href="#start_enterprise" className={styles.logo_brand} aria-label="Auto Ar JR - Página inicial">
                    <img className={styles.txt_brand_brand} src={brand} alt=""/>
                </a>

                <nav className={styles.nav} aria-label="Navegação principal">
                    <a href="#start_enterprise">Início</a>
                    <a href="#service_enterprise">Serviços</a>
                    <a href="#about_enterprise"> Sobre nós</a>
                    <a href="#videos_enterprise">Vídeos</a>
                    <a href="#contact_enterprise">Contato</a>
                </nav>

                <div className={styles.contact}>
                    <a
                        className={styles.button_contact}
                        href="https://wa.me/+5511947272232"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Fale conosco pelo WhatsApp"
                    >
                        <img src={what_icon} alt=""/>
                    </a>
                </div>
            </div>
        </header>
    )
}