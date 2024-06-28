import React, { useState, useEffect } from 'react';
import styles from '../styles/Services.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Service {
  name: string;
  price: string;
}

interface ServiceCategory {
  category: string;
  image: string;
  services: Service[];
}

export const ServiceData: ServiceCategory[] = [
  {
    category: "STYLING",
    image: "images/ldmh-haircut.jpg",
    services: [
      { name: "Blow Dry / Styling", price: "$50+" },
      { name: "Blow Dry / Styling with Extensions", price: "$65+" },
      { name: "Haircut", price: "$65" },
      { name: "Event Styling", price: "$85" },
    ],
  },
  {
    category: "COLOR",
    image: "images/ldmh-colorbrush.jpg",
    services: [
      { name: "Gloss", price: "$75+" },
      { name: "Single Process", price: "$75+" },
      { name: "Face Frame", price: "$90+" },
      { name: "Partial Balayage", price: "$200+" },
      { name: "Partial Foil Highlight", price: "$220+" },
      { name: "Full Balayage", price: "$250+" },
      { name: "Full Foil Highlight", price: "$275+" },
    ],
  },
  {
    category: "EXTENSIONS",
    image: "images/ldmh-extensions.jpg",
    services: [
      { name: "K-tip Installation", price: "$150/pack" },
      { name: "Tape-in Installation", price: "$150/pack" },
      { name: "Volume Weft Installation", price: "$250+" },
    ],
  },
  {
    category: "TREATMENT",
    image: "images/ldmh-treatment.jpg",
    services: [
      { name: "Hair Rejuvenation", price: "$100+" },
      { name: "KERASILK", price: "$350+" },
    ],
  },
];

const Services: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean[]>(new Array(ServiceData.length).fill(false));

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className={styles.servicesSection}>
      <h1 className={styles.header}>Services</h1>
      {ServiceData.map((service, index) => (
        <div
          key={index}
          className={styles.cardContainer}
          data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'}
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <div
            className={`${styles.card} ${flipped[index] ? styles.flipped : ''}`}
            onClick={() => handleFlip(index)}
          >
            <div className={styles.cardFront}>
              <img src={service.image} alt={service.category} className={styles.cardImage} />
              <h2 className={styles.cardTitle}>{service.category}</h2>
            </div>
            <div className={styles.cardBack}>
              <h2 className={styles.cardTitle}>{service.category}</h2>
              <ul className={styles.serviceList}>
                {service.services.map((item, idx) => (
                  <li key={idx} className={styles.serviceItem}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

