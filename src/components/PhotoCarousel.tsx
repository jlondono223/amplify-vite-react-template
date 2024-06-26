import React from 'react';
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
              <img src={photo.url} alt={`Slide ${index}`} className={styles.slideImage} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
