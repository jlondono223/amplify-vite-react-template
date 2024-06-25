import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Services.module.css';

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
      { name: "Hair Rejuvenation Treatment", price: "$100+" },
      { name: "KERASILK Treatment", price: "$350+" },
    ],
  },
];

const Services: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean[]>(new Array(ServiceData.length).fill(false));
  const [visible, setVisible] = useState<boolean[]>(new Array(ServiceData.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleFlip = (index: number) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          const isVisible = entry.isIntersecting;
          setVisible(prev => {
            const newVisible = [...prev];
            newVisible[index] = isVisible;
            return newVisible;
          });
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.servicesSection}>
      <h1 className={styles.header}>Services</h1>
      {ServiceData.map((service, index) => (
        <div
          key={index}
          data-index={index}
          ref={el => cardRefs.current[index] = el}
          className={`${styles.cardContainer} ${visible[index] ? (index % 2 === 0 ? styles.slideInRight : styles.slideInLeft) : (index % 2 === 0 ? styles.slideOutRight : styles.slideOutLeft)}`}
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
                    {item.name} - {item.price}
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
