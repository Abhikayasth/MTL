// FeedbackForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const feedback = {
            name,
            email,
            contact,
            message,
            rating,
            timestamp: new Date().toLocaleString(), // Get the current date and time
        };

        // Get existing feedbacks from local storage
        const existingFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

        // Check for duplicates
        const isDuplicate = existingFeedbacks.some(
            (item) => item.message === feedback.message && item.email === feedback.email
        );

        if (!isDuplicate) {
            existingFeedbacks.push(feedback); // Add feedback if it's unique
            localStorage.setItem('feedbacks', JSON.stringify(existingFeedbacks)); // Save to local storage
            navigate('/notification', { state: { feedback } }); // Navigate to notification page
        } else {
            alert('Feedback already submitted!'); // Notify user if duplicate
        }

        // Clear form fields
        setName('');
        setEmail('');
        setContact('');
        setMessage('');
        setRating(0);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Feedback Form</h1>
            <form onSubmit={handleSubmit} className="flex flex-col mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="border p-2 mb-2"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border p-2 mb-2"
                    required
                />
                <input
                    type="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                    className="border p-2 mb-2"
                    required
                />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your feedback..."
                    rows="4"
                    className="border p-2 mb-2"
                    required
                />
                <div className="mb-2">
                    <label>Rating: </label>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setRating(star)} className="cursor-pointer">
                            {star <= rating ? '★' : '☆'}
                        </span>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Post Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
