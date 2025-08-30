import React, { useState } from 'react';
export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Submit Madidhmel
    function handleSubmit(e) {

        e.preventDefault(); // Reload Stop Madoke

        alert(`Message sent by ${name} (${email}): ${message}`);

        // Form Clear Madoke
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div style={{ maxWidth: '500px', margin: '80px auto', background: '#FFF', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>

            {/* Name input */}
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required

                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />

                {/* Email input */}
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required

                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />

                {/* Message box */}
                <textarea
                    placeholder="Your Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required

                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                ></textarea>

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: '#111',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Send Message
                </button>

            </form>
        </div>
    );
}