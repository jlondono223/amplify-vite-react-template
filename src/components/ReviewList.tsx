// src/components/ReviewList.tsx
import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';
import styles from '../styles/ReviewList.module.css';

const client = generateClient<Schema>();

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Array<Schema["AppointmentReview"]["type"]>>([]);

  useEffect(() => {
    const subscription = client.models.AppointmentReview.observeQuery().subscribe({
      next: (data) => setReviews([...data.items]),
    });

    return () => subscription.unsubscribe();
  }, []);

  function deleteReview(id: string) {
    client.models.AppointmentReview.delete({ id });
  }

  return (
    <div className={styles.reviewListContainer}>
      <h2>Reviews</h2>
      <ul className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewListItem} onClick={() => deleteReview(review.id)}>
            <h3 className={styles.reviewListItemTitle}>{review.name}</h3>
            <p className={styles.reviewListItemText}>{review.email}</p>
            <p className={styles.reviewListItemText}>{review.date ? new Date(review.date).toLocaleDateString() : 'No date provided'}</p>
            <p className={styles.reviewListItemText}>Rating: {review.rating}</p>
            <p className={styles.reviewListItemText}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
