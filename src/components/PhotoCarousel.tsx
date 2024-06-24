import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import styles from '../styles/PhotoCarousel.module.css';

interface Photo {
  url: string;
}

interface PhotoCarouselProps {
  photos: Photo[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={10}
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
      className={styles.mySwiper}
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <img src={photo.url} alt={`Slide ${index}`} className={styles.slideImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoCarousel;
