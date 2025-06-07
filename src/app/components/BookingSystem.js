// components/BookingSystem.js
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const BookingSystem = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        companyName: '',
        date: '',
        time: '',
        email: '',
        meetingLink: ''
    });

    // Generate available time slots (9am to 9pm)
    const timeSlots = Array.from({ length: 12 }, (_, i) => {
        const hour = i + 9;
        return `${hour}:00 - ${hour + 1}:00`;
    });

    // Generate available dates (next 7 days)
    const today = new Date();
    const availableDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return {
            display: date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
            value: date.toISOString().split('T')[0]
        };
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/book-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...bookingData,
                    recipientEmail: 'shubspatil17@gmail.com'
                }),
            });

            if (response.ok) {
                setStep(4); // Success step
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-[var(--color-light)] dark:bg-[var(--color-dark)] p-8 rounded-lg shadow-xl max-w-md w-full border border-[var(--color-dark)] dark:border-[var(--color-light)]"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold dark:text-[var(--color-light)]">Schedule Interview</h2>
                    <button
                        onClick={onClose}
                        className="text-[var(--color-dark)] dark:text-[var(--color-light)] hover:text-[var(--color-primary)] hover:cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {step === 1 && (
                    <div>
                        <h3 className="text-xl mb-4 dark:text-[var(--color-light)]">Select a Date</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {availableDates.map((date) => (
                                <button
                                    key={date.value}
                                    onClick={() => {
                                        setBookingData(prev => ({ ...prev, date: date.display }));
                                        setStep(2);
                                    }}
                                    className="p-3 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded hover:bg-[var(--color-primary)] hover:text-[var(--color-light)] transition-colors"
                                >
                                    {date.display}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className="text-xl mb-4 dark:text-[var(--color-light)]">Select a Time</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => {
                                        setBookingData(prev => ({ ...prev, time }));
                                        setStep(3);
                                    }}
                                    className="p-3 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded hover:bg-[var(--color-primary)] hover:text-[var(--color-light)] transition-colors"
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setStep(1)}
                            className="mt-4 text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]"
                        >
                            ← Back
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-xl mb-4 dark:text-[var(--color-light)]">Interview Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-1 dark:text-[var(--color-light)]">Company Name *</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={bookingData.companyName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded dark:bg-[var(--color-dark)] dark:text-[var(--color-light)]"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 dark:text-[var(--color-light)]">Your Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={bookingData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-2 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded dark:bg-[var(--color-dark)] dark:text-[var(--color-light)]"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 dark:text-[var(--color-light)]">Meeting Link (Optional)</label>
                                <input
                                    type="url"
                                    name="meetingLink"
                                    value={bookingData.meetingLink}
                                    onChange={handleInputChange}
                                    placeholder="https://meet.google.com/xyz-abc-def"
                                    className="w-full p-2 border border-[var(--color-dark)] dark:border-[var(--color-light)] rounded dark:bg-[var(--color-dark)] dark:text-[var(--color-light)]"
                                />
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-light)] py-2 rounded font-semibold"
                                >
                                    Schedule Interview
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => setStep(2)}
                            className="mt-4 text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] hover:cursor-pointer"
                        >
                            ← Back
                        </button>
                    </form>
                )}

                {step === 4 && (
                    <div className="text-center">
                        <div className="text-5xl mb-4">🎉</div>
                        <h3 className="text-xl mb-2 dark:text-[var(--color-light)]">Interview Scheduled!</h3>
                        <p className="mb-4 dark:text-[var(--color-light)]">
                            Your interview is scheduled for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>.
                        </p>
                        {bookingData.meetingLink ? (
                            <p className="mb-4 dark:text-[var(--color-light)]">
                                Meeting Link: <a href={bookingData.meetingLink} className="text-[var(--color-primary)] break-all">{bookingData.meetingLink}</a>
                            </p>
                        ) : (
                            <p className="mb-4 dark:text-[var(--color-light)]">
                                Please send the meeting details to <strong>shubspatil17@gmail.com</strong> at your convenience.
                            </p>
                        )}
                        <button
                            onClick={onClose}
                            className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] text-[var(--color-light)] py-2 px-6 rounded font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default BookingSystem;