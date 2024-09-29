// NotificationPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NotificationPage = () => {
    const location = useLocation();
    const initialFeedback = location.state?.feedback ? [location.state.feedback] : [];
    const [feedbackList, setFeedbackList] = useState(initialFeedback);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editedFeedback, setEditedFeedback] = useState({ name: '', email: '', contact: '', message: '', rating: 0 });

    // Load feedbacks from local storage on mount
    useEffect(() => {
        const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        setFeedbackList((prev) => [...prev, ...savedFeedbacks]); // Merge initial feedbacks if any
    }, []);

    // Save feedbacks to local storage whenever the feedbackList changes
    useEffect(() => {
        localStorage.setItem('feedbacks', JSON.stringify(feedbackList));
    }, [feedbackList]);

    const handleDelete = (index) => {
        const updatedFeedbackList = feedbackList.filter((_, i) => i !== index);
        setFeedbackList(updatedFeedbackList);
    };

    const handleEdit = (index) => {
        setEditedFeedback(feedbackList[index]); // Set current feedback for editing
        setEditIndex(index);
        setIsEditing(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedFeedbackList = [...feedbackList];
        updatedFeedbackList[editIndex] = { ...editedFeedback, timestamp: new Date().toLocaleString() }; // Update timestamp on edit
        setFeedbackList(updatedFeedbackList);
        setIsEditing(false);
        setEditedFeedback({ name: '', email: '', contact: '', message: '', rating: 0 }); // Reset edit form
        setEditIndex(null);
    };

    // Get the most recent feedback to display as notification
    const latestFeedback = feedbackList[feedbackList.length - 1];

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Feedback Notification</h1>

            {latestFeedback ? (
                <div className="mb-4 p-4 bg-green-200 border-l-4 border-green-500 rounded-lg">
                    <p className="font-semibold">{latestFeedback.name}</p>
                    <p>{latestFeedback.message}</p>
                    <p className="text-sm text-gray-500">{`Rating: ${latestFeedback.rating} | Submitted on: ${latestFeedback.timestamp}`}</p>
                </div>
            ) : (
                <p className="text-lg text-center">No feedback submitted.</p>
            )}

            {isEditing ? (
                <form onSubmit={handleUpdate} className="mb-4">
                    <input
                        type="text"
                        value={editedFeedback.name}
                        onChange={(e) => setEditedFeedback({ ...editedFeedback, name: e.target.value })}
                        placeholder="Name"
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="email"
                        value={editedFeedback.email}
                        onChange={(e) => setEditedFeedback({ ...editedFeedback, email: e.target.value })}
                        placeholder="Email"
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <input
                        type="tel"
                        value={editedFeedback.contact}
                        onChange={(e) => setEditedFeedback({ ...editedFeedback, contact: e.target.value })}
                        placeholder="Contact"
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <textarea
                        value={editedFeedback.message}
                        onChange={(e) => setEditedFeedback({ ...editedFeedback, message: e.target.value })}
                        placeholder="Write your feedback..."
                        rows="4"
                        className="border p-2 mb-2 w-full"
                        required
                    />
                    <div className="mb-2">
                        <label>Rating: </label>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} onClick={() => setEditedFeedback({ ...editedFeedback, rating: star })} className="cursor-pointer">
                                {star <= editedFeedback.rating ? '★' : '☆'}
                            </span>
                        ))}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Update Feedback
                    </button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white p-2 rounded ml-2">
                        Cancel
                    </button>
                </form>
            ) : null}

            {feedbackList.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">All Feedback:</h2>
                    <ul className="space-y-4">
                        {feedbackList.map((feedback, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-semibold">{feedback.name}</p>
                                    <p className="text-gray-600">{feedback.message}</p>
                                    <p className="text-sm text-gray-500">{`Rating: ${feedback.rating} | Submitted on: ${feedback.timestamp}`}</p>
                                </div>
                                <div className="flex">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="bg-yellow-500 text-white p-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationPage;
