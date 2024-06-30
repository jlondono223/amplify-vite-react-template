import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import styles from '../styles/PhotoCarousel.module.css';

interface Photo {
  url: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.srcset = img.dataset.srcset!;
            img.classList.remove(styles.lazyImage);
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    imgRefs.current.forEach(img => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        effect={'coverflow'}
        rewind={true}
        speed={600}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, EffectCoverflow]}
        className={styles.mySwiper}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.imageWrapper}>
              <img
                ref={(el) => imgRefs.current[index] = el}
                data-src={photo.url}
                data-srcset={`${photo.url}?w=200 200w, ${photo.url}?w=400 400w, ${photo.url}?w=800 800w`}
                sizes="(max-width: 600px) 200px, (max-width: 1024px) 400px, 800px"
                alt={`Slide ${index}`}
                className={`${styles.slideImage} ${styles.lazyImage}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
