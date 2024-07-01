import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { AppointmentReviewSchema } from '../../amplify/data/review';

const client = generateClient<AppointmentReviewSchema>();

const ReviewList: React.FC = () => {
    const [reviews, setReviews] = useState<Array<AppointmentReviewSchema["AppointmentReview"]["type"]>>([]);

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
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id} onClick={() => deleteReview(review.id)}>
                        <h3>{review.name}</h3>
                        <p>{review.email}</p>
                        <p>{review.date ? new Date(review.date).toLocaleDateString() : 'No date provided'}</p>
                        <p>Rating: {review.rating}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;

