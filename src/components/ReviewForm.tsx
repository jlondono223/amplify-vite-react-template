// src/components/ReviewForm.tsx
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../amplify/data/resource';

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
                rating: parseFloat(formData.rating.toString()) // Ensure rating is a float
            });
            alert('Review submitted successfully!');
            setFormData({ name: '', email: '', date: '', rating: 0, content: '' });
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
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
                required
            />
            <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Review Content"
                required
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;