// src/components/ReviewForm.tsx
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import styles from '../styles/ReviewForm.module.css';
import 'aos/dist/aos.css';

const client = generateClient<Schema>();

const ReviewForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    rating: 0,
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.models.AppointmentReview.create({
        ...formData,
        date: new Date(formData.date).toISOString(), // Ensure date is in ISO format
        rating: parseFloat(formData.rating.toString()), // Ensure rating is a float
      });
      alert('Review submitted successfully!');
      setFormData({ name: '', email: '', date: '', rating: 0, content: '' });
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.reviewFormContainer} data-aos="fade-up">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={styles.reviewFormInput}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={styles.reviewFormInput}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
        className={styles.reviewFormInput}
        required
      />
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
        min="0"
        max="5"
        step="0.1"
        className={`${styles.reviewFormInput} ${styles.reviewFormRating}`}
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Review Content"
        className={styles.reviewFormTextarea}
        required
      />
      <button type="submit" className={styles.reviewFormButton}>Submit Review</button>
    </form>
  );
};

export default ReviewForm;
