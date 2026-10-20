
import { useEffect, useRef, useState } from "react";
import styles from "./videos.module.css";

import painel from "../assets/cards/img_remoçao_painel.png";
import compressor from "../assets/cards/img_defeito_compressor.png"
import higienizacao from "../assets/cards/img_higienização.png"
import gas from "../assets/cards/img_carga_de_gas.png"

import byd from "../assets/cards/u9extreme.png"


const category = [
    { id: "all", label: "Todos" },
    { id: "remocao-de-painel", label: "Remoção de Painel" },
    { id: "defeito-de-compressor", label: "Defeito de Compressor" },
    { id: "higienizacao", label: "Higienização" },
    { id: "carga-de-gas", label: "Carga de Gás" },
    { id: "outros", label: "Outros" },
];

const mockVideos = [
    {
        id: 1,
        title: "Remoção de painel",
        category: "remocao-de-painel",
        thumbnail: painel,
        description: "Remoção completado painel evoque 2020",
        duration: "03:45",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 2,
        title: "Defeito no compressor",
        category: "defeito-de-compressor",
        thumbnail: compressor,
        description: "Defeito no compressor Peugeot 208",
        duration: "02:34",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 3,
        title: "Higienização",
        category: "higienizacao",
        thumbnail: higienizacao,
        description: "Higienização WURTH por ozônio",
        duration: "01:37",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
        id: 4,
        title: "Carga de gás",
        category: "carga-de-gas",
        thumbnail: gas,
        description: "Carga de gás Ar condicionado",
        duration: "05:00",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
        id: 5,
        title: "Remoção de painel",
        category: "remocao-de-painel",
        thumbnail: byd,
        description: "Remoção painel do Byd Yangwang u9",
        duration: "23:30",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
];

export function Videos() {
    const [categorySelected, setCategorySelected] = useState("all");
    const [isDragging, setIsDragging] = useState(false);
    const [cardHeight, setCardHeight] = useState(0);

    const sliderRef = useRef(null);
    const cardRef = useRef(null);

    const dragData = useRef({
        startX: 0,
        scrollLeft: 0,
        moved: false,
    });

    const filteredVideos =
        categorySelected === "all"
            ? mockVideos
            : mockVideos.filter(
                  (video) => video.category === categorySelected
              );

    // Volta o carrossel ao início quando a categoria muda
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = 0;
        }

        dragData.current.moved = false;
    }, [categorySelected]);

    // Mede a altura real do primeiro card
    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        const updateHeight = () => {
            setCardHeight(card.getBoundingClientRect().height);
        };

        updateHeight();

        const observer = new ResizeObserver(() => {
            updateHeight();
        });

        observer.observe(card);

        return () => observer.disconnect();
    }, [categorySelected, filteredVideos.length]);

    function handlePointerDown(event) {
        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        const slider = sliderRef.current;

        if (!slider) return;

        dragData.current = {
            startX: event.clientX,
            scrollLeft: slider.scrollLeft,
            moved: false,
        };

        setIsDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event) {
        const slider = sliderRef.current;

        if (!slider || !isDragging) return;

        const distance =
            event.clientX - dragData.current.startX;

        if (Math.abs(distance) > 5) {
            dragData.current.moved = true;
        }

        slider.scrollLeft =
            dragData.current.scrollLeft - distance;
    }

    function handlePointerUp() {
        setIsDragging(false);
    }

    function handleClickCapture(event) {
        if (dragData.current.moved) {
            event.preventDefault();
            event.stopPropagation();
        }

        dragData.current.moved = false;
    }

    return (
        <section
            className={styles.container}
            aria-labelledby="videos-title"
        >
            <div className={styles.content}>
                <p className={styles.label}>Vídeos</p>

                <div className={styles.service}>
                    <h1
                        id="videos-title"
                        className={styles.title}
                    >
                        Serviços realizados
                    </h1>

                    <p className={styles.description}>
                        Escolha uma categoria e conheça mais sobre cada
                        serviço que oferecemos.
                    </p>
                </div>

                <div className={styles.categories}>
                    {category.map((categoria) => (
                        <button
                            key={categoria.id}
                            type="button"
                            className={`${styles.categoryButton} ${
                                categorySelected === categoria.id
                                    ? styles.active
                                    : ""
                            }`}
                            aria-pressed={
                                categorySelected === categoria.id
                            }
                            onClick={() =>
                                setCategorySelected(categoria.id)
                            }
                        >
                            {categoria.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.videos}>
                {filteredVideos.length > 0 ? (
                    <div
                        ref={sliderRef}
                        className={`${styles.videoGrid} ${
                            isDragging ? styles.dragging : ""
                        }`}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        onLostPointerCapture={handlePointerUp}
                        onClickCapture={handleClickCapture}
                    >
                        {filteredVideos.map((video, index) => (
                            <article
                                ref={index === 0 ? cardRef : null}
                                key={video.id}
                                className={styles.videoCard}
                            >
                                <div
                                    className={styles.thumbnailContainer}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className={styles.thumbnail}
                                        draggable={false}
                                    />

                                    <div
                                        className={styles.playButton}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={styles.playIcon}
                                            fill="currentColor"
                                        >
                                            <path d="M8 5.5v13l10-6.5z" />
                                        </svg>
                                    </div>

                                    <h2 className={styles.videoTitle}>
                                        {video.title}
                                    </h2>
                                </div>

                                <div className={styles.videoInfo}>
                                    <p
                                        className={
                                            styles.videoDescription
                                        }
                                    >
                                        {video.description}
                                    </p>

                                    <span className={styles.duration}>
                                        {video.duration}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div
                        className={styles.emptyState}
                        style={{
                            minHeight:
                                cardHeight > 0
                                    ? `${cardHeight}px`
                                    : "350px",
                        }}
                    >
                        <p className={styles.emptyTitle}>
                            Ainda não temos vídeos por aqui.
                        </p>

                        <p className={styles.emptyDescription}>
                            Em breve, adicionaremos vídeos desta categoria.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
