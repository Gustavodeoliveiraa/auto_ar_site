import { Link } from 'react-router-dom'
import styles from './services.module.css'

// Ícones pequenos
import snowFlake from '../assets/cards/snowflake.png'
import painel from '../assets/cards/painel.png'
import blow from '../assets/cards/blow.png'
import gas from '../assets/cards/gas.png'
import services from '../assets/cards/reticencias.png'

// Imagens dos cards
import img_compressor from '../assets/cards/img_defeito_compressor.png'
import img_painel from '../assets/cards/img_remoçao_painel.png'
import img_blow from '../assets/cards/img_higienização.png'
import img_gas from '../assets/cards/img_carga_de_gas.png'
import img_services from '../assets/cards/img_outros_servicos.png'


const servicesCards = [
    {
        icon: snowFlake,
        image: img_compressor,
        title: (<>DEFEITO DE<br />COMPRESSOR</>),
        alt: 'Defeito de compressor',
        description:'Diagnóstico e reparo de compressores com eficiência e qualidade.',
        link: null
    },

    {
        icon: painel,
        image: img_painel,
        title: (<>REMOÇÃO DE<br />PAINEL </>),
        alt: 'Remoção de painel',
        description:'Remoção e instalação de painéis com segurança e precisão.',
        link: null
    },

    {
        icon: blow,
        image: img_blow,
        title: 'HIGIENIZAÇÃO',
        alt: 'Higienização do ar condicionado',
        description:'Higienização completa do sistema de ar condicionado do seu veículo.',
        link: null
    },

    {
        icon: gas,
        image: img_gas,
        title: 'CARGA DE GÁS',
        alt: 'Carga de gás',
        description: 'Carga de gás com equipamentos de alta tecnologia.',
        link: null
    },

    {
        icon: services,
        image: img_services,
        title: (<>OUTROS<br />SERVIÇOS</>),
        alt: 'Outros serviços',
        description:'Outros serviços especializados para manter seu ar sempre perfeito.',
        link: null
    }
]


export function Services() {
    return (
        <section id='service_enterprise' className={styles.container}>
            <div className={styles.label_txt}>
                <p>Nossos Serviços</p>
            </div>

            <div className={styles.content_service}>

                <div className={styles.service_title}>
                    <p>Soluções completas para o</p>
                    <div className={styles.content_service_txt}>
                        <p>ar condicionado</p>
                        <p>do seu carro</p>
                    </div>
                </div>

                <div className={styles.service_description}>
                    <p>
                        Escolha uma categoria e conheça mais sobre cada serviço
                        que oferecemos
                    </p>
                </div>

                <div className={styles.service_button}>
                    <button type="button">
                        Ver todos os serviços →
                    </button>
                </div>
            </div>

            {/* CARDS DOS SERVIÇOS */}
            <div className={styles.cards_container}>
                {servicesCards.map((card, index) => (
                    <Link
                        to={card.link || '#'}
                        className={styles.card}
                        key={index}
                    >
                        <div className={styles.card_header}>
                            <div className={styles.card_icon}>
                                <img src={card.icon} alt="" />
                            </div>
                            <h3>{card.title}</h3>
                        </div>
                        <img src={card.image} alt={card.alt} />
                        <p className={styles.card_description}>{card.description} </p>
                        <div className={styles.card_link}>SAIBA MAIS</div>
                    </Link>
                ))}
            </div>
        </section>
    )
}