import React from 'react';
import HomeBanner from '../HomeBanner';
import PhotoCarousel from '../PhotoCarousel'; 
import Footer from '../Footer';

const Home: React.FC = () => {
  // Generate the array of photo objects
  const photoCount = 30;
  const photos = Array.from({ length: photoCount }, (_, index) => ({
    url: `/images/gallery/ldmh-${index + 1}.jpg`,
  }));

  return (
    <div>
      <HomeBanner />
      <PhotoCarousel photos={photos} />
      <Footer/>
    </div>
  );
};

export default Home;

