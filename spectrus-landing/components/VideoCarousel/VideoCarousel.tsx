"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./VideoCarousel.module.css";
import { carouselVideos, type CarouselVideo } from "@/data/carouselVideos";

const AUTO_SPEED = 70;

export default function VideoCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);
  const didDragRef = useRef(false);

  const [selectedVideo, setSelectedVideo] = useState<CarouselVideo | null>(null);

  // ESTRATEGIA: Triple buffer
  const displayVideos = [...carouselVideos, ...carouselVideos, ...carouselVideos];
  const originalLength = carouselVideos.length;

  const updatePosition = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
  }, []);

  const calculateLoopWidth = useCallback(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    if (cards.length <= originalLength) return;

    const firstCard = cards[0] as HTMLElement;
    const firstClone = cards[originalLength] as HTMLElement;

    const rect1 = firstCard.getBoundingClientRect();
    const rect2 = firstClone.getBoundingClientRect();
    const width = rect2.left - rect1.left;

    if (width > 0) {
      if (loopWidthRef.current === 0 && !isDraggingRef.current) {
        positionRef.current = -width;
      }
      loopWidthRef.current = width;
      updatePosition();
    }
  }, [originalLength, updatePosition]);

  const normalizePosition = useCallback(() => {
    const loopWidth = loopWidthRef.current;
    
    if (loopWidth > 0) {
      if (positionRef.current <= -(loopWidth * 2)) {
        positionRef.current += loopWidth;
      } else if (positionRef.current >= 0) {
        positionRef.current -= loopWidth;
      }
    }
    
    updatePosition();
  }, [updatePosition]);

  const animate = useCallback(
    (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Solo marcha si no hay resistencia (no hay drag) y el terreno está medido
      if (!isDraggingRef.current && loopWidthRef.current > 0) {
        positionRef.current -= AUTO_SPEED * delta;
        normalizePosition();
      }

      animationRef.current = requestAnimationFrame(animate);
    },
    [normalizePosition]
  );

  useEffect(() => {
    calculateLoopWidth();

    // Redoblamos refuerzos para atrapar la carga diferida de elementos pesados
    const timers = [
      setTimeout(calculateLoopWidth, 150),
      setTimeout(calculateLoopWidth, 500)
    ];

    const resizeObserver = new ResizeObserver(() => {
      calculateLoopWidth();
    });

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
      if (trackRef.current.children[0]) {
        resizeObserver.observe(trackRef.current.children[0]);
      }
    }

    window.addEventListener("resize", calculateLoopWidth);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      timers.forEach(clearTimeout);
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateLoopWidth);
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, calculateLoopWidth]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    didDragRef.current = false;
    startXRef.current = event.clientX;
    startPositionRef.current = positionRef.current;
    
    // TÁCTICA: Asalto directo al DOM. Evitamos el re-render de React para no matar el evento de puntero.
    if (viewportRef.current) {
      viewportRef.current.classList.add(styles.dragging);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const delta = event.clientX - startXRef.current;
    
    if (Math.abs(delta) > 6) didDragRef.current = true;
    
    positionRef.current = startPositionRef.current + delta;
    normalizePosition(); 
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    lastTimeRef.current = null;
    
    if (viewportRef.current) {
      viewportRef.current.classList.remove(styles.dragging);
    }
  };

  const handleCardClick = (video: CarouselVideo) => {
    if (didDragRef.current) {
      return; 
    }
    setSelectedVideo(video);
  };

  const closeModal = () => setSelectedVideo(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section className={styles.section}>
        <div
          ref={viewportRef}
          className={styles.viewport}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div ref={trackRef} className={styles.track}>
            {displayVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className={styles.card}
                onClick={() => handleCardClick(video)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardClick(video);
                  }
                }}
              >
                <video
                  className={styles.preview}
                  /* ESCUDO: Fallback tolerante a propiedades antiguas de datos */
                  src={video.previewUrl || (video as any).url}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="metadata"
                  draggable={false}
                  onLoadedMetadata={(event) => {
                    const element = event.currentTarget;
                    const start = video.previewStart ?? 0;
                    if (start < element.duration) element.currentTime = start;
                  }}
                  onTimeUpdate={(event) => {
                    const element = event.currentTarget;
                    const start = video.previewStart ?? 0;
                    const duration = video.previewDuration ?? 6;
                    if (element.currentTime >= start + duration) {
                      element.currentTime = start;
                      element.play().catch(() => {});
                    }
                  }}
                />
                <div className={styles.overlay}>
                  <div className={styles.playIcon}>▶</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={closeModal}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Cerrar video"
            >
              ×
            </button>
            <video
              className={styles.fullVideo}
              /* ESCUDO: Reproducirá el archivo completo o el antiguo fallback */
              src={selectedVideo.videoUrl || (selectedVideo as any).url}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}