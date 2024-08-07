// src/pages/Home.tsx
import React from 'react';
import HomeBanner from '../HomeBanner';
import PhotoCarousel from '../PhotoCarousel'; 
import Footer from '../Footer';
import Services from "../Services";
// import AuthWithReviewForm from '../../components/AuthWithReviewForm';
import styles from '../../styles/Home.module.css';

const Home: React.FC = () => {
  // Generate the array of photo objects
  const photoCount = 30;
  const photos = Array.from({ length: photoCount }, (_, index) => ({
    url: `/images/gallery/ldmh-${index + 1}.jpg`,
  }));

  return (
    <div>
      <HomeBanner />
      <h2 id="gallery" className={styles.sectionHeader}>Gallery</h2>
      <PhotoCarousel photos={photos} />
      <h2 id="services" className={styles.sectionHeader}>Our Services</h2>
      <Services />
      {/* <h2 id="review" className={styles.sectionHeader}>Submit a Review</h2>
      <AuthWithReviewForm /> */}
      <Footer />
    </div>
  );
};

export default Home;


