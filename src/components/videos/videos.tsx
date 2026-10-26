
import { useEffect, useRef, useState } from "react";

import styles from "./videos.module.css";
import { mockVideos } from "../../data/videos";
import { category } from "../../data/categories";
import instagramIcon from "../assets/footer/instagram_icon.png";

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

    // Reinicia o carrossel quando a categoria muda.
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = 0;
        }

        dragData.current.moved = false;
    }, [categorySelected]);

    // Mantém a altura do estado vazio compatível com a dos cards.
    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        const updateHeight = () => {
            const height = card.getBoundingClientRect().height;

            setCardHeight((previousHeight) =>
                previousHeight === height ? previousHeight : height
            );
        };

        updateHeight();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", updateHeight);

            return () => {
                window.removeEventListener("resize", updateHeight);
            };
        }

        const observer = new ResizeObserver(updateHeight);
        observer.observe(card);

        return () => observer.disconnect();
    }, [categorySelected, filteredVideos.length]);

    function handlePointerDown(event) {
        // Ignora botões secundários do mouse.
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

        const distance = event.clientX - dragData.current.startX;

        if (Math.abs(distance) > 5) {
            dragData.current.moved = true;
        }

        slider.scrollLeft = dragData.current.scrollLeft - distance;
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
                    <h2
                        id="videos-title"
                        className={styles.title}
                    >
                        Serviços realizados
                    </h2>

                    <p className={styles.description}>
                        Escolha uma categoria e conheça mais sobre cada
                        serviço que oferecemos.
                    </p>
                </div>

                <div
                    className={styles.categories}
                    role="group"
                    aria-label="Filtrar vídeos por categoria"
                >
                    {category.map((categoria) => {
                        const isActive =
                            categorySelected === categoria.id;

                        return (
                            <button
                                key={categoria.id}
                                type="button"
                                className={`${styles.categoryButton} ${
                                    isActive ? styles.active : ""
                                }`}
                                aria-pressed={isActive}
                                onClick={() =>
                                    setCategorySelected(categoria.id)
                                }
                            >
                                {categoria.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className={styles.videos}>
                {filteredVideos.length > 0 ? (
                    <div
                        ref={sliderRef}
                        className={`${styles.videoGrid} ${
                            isDragging ? styles.dragging : ""
                        }`}
                        role="region"
                        aria-label="Vídeos dos serviços realizados"
                        aria-roledescription="carrossel"
                        tabIndex={0}
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
                                        alt=""
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

                                    <h3 className={styles.videoTitle}>
                                        {video.title}
                                    </h3>
                                </div>

                                <div className={styles.videoInfo}>
                                    <p className={styles.videoDescription}>
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
                            minHeight: `${Math.max(cardHeight, 350)}px`,
                        }}
                        role="status"
                        aria-live="polite"
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

            <div className={styles.instagramButton}>
                <a
                    className={styles.instagramLink}
                    href="https://www.instagram.com/autoarjrarcondicionado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver mais vídeos no Instagram da Auto Ar JR (abre em nova aba)"
                >
                    <span>Ver mais vídeos</span>

                    <img
                        src={instagramIcon}
                        alt=""
                        className={styles.instagramIcon}
                        width="32"
                        height="32"
                    />
                </a>
            </div>
        </section>
    );
}
