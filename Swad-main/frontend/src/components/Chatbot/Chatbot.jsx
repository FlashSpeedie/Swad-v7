import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subtitle, setSubtitle] = useState('');
    const { transcript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
            alert('Your browser does not support speech recognition.');
            return;
        }

        if (isOpen) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance('Welcome to Swad traditional Indian Restaurant. What are you looking for, dine in or dine out?');
            synth.speak(utterance);
            setSubtitle('Welcome to Swad traditional Indian Restaurant. What are you looking for, dine in or dine out?');
            SpeechRecognition.startListening({ continuous: true });
        } else {
            SpeechRecognition.stopListening();
        }
    }, [isOpen]);

    useEffect(() => {
        if (transcript) {
            handleUserResponse(transcript);
        }
    }, [transcript]);

    const handleUserResponse = (response) => {
        resetTranscript();
        const synth = window.speechSynthesis;

        if (response.toLowerCase().includes('dine in')) {
            setSubtitle('Okay, what date?');
            synth.speak(new SpeechSynthesisUtterance('Okay, what date?'));
        } else if (response.toLowerCase().includes('dine out')) {
            setSubtitle('What would you like to eat, breakfast, lunch, dinner, or snacks?');
            synth.speak(new SpeechSynthesisUtterance('What would you like to eat, breakfast, lunch, dinner, or snacks?'));
        } else if (response.toLowerCase().includes('what is')) {
            const foodName = response.replace('what is', '').trim();
            const description = getFoodDescription(foodName);
            setSubtitle(description);
            synth.speak(new SpeechSynthesisUtterance(description));
        } else if (response.toLowerCase().includes('price')) {
            const foodName = response.replace('price of', '').trim();
            const price = getFoodPrice(foodName);
            setSubtitle(`The price of ${foodName} is ${price}`);
            synth.speak(new SpeechSynthesisUtterance(`The price of ${foodName} is ${price}`));
        } else if (response.toLowerCase().includes('ok i will have that')) {
            setSubtitle('Added to the cart. Is that all?');
            synth.speak(new SpeechSynthesisUtterance('Added to the cart. Is that all?'));
        } else if (response.toLowerCase().includes('yes')) {
            setSubtitle('Thank you. Redirecting to the cart.');
            synth.speak(new SpeechSynthesisUtterance('Thank you. Redirecting to the cart.'));
            setTimeout(() => {
                window.location.href = '/cart';
            }, 2000);
        } else if (response.toLowerCase().includes('no')) {
            setSubtitle('What else would you like to add?');
            synth.speak(new SpeechSynthesisUtterance('What else would you like to add?'));
        }
    };

    const getFoodDescription = (foodName) => {
        // Replace with actual descriptions
        const descriptions = {
            samosa: 'A crispy fried pastry filled with spicy potato.',
            biryani: 'A flavorful rice dish with spices, vegetables, or meat.',
        };
        return descriptions[foodName.toLowerCase()] || `Sorry, I don't have a description for ${foodName}.`;
    };

    const getFoodPrice = (foodName) => {
        // Replace with actual prices
        const prices = {
            samosa: '₹20',
            biryani: '₹150',
        };
        return prices[foodName.toLowerCase()] || `Price not available for ${foodName}.`;
    };

    return (
        <div>
            <div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#007bff',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 1000,
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="/path/to/bot-icon.png" alt="Chatbot" style={{ width: '40px', height: '40px' }} />
            </div>

            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                    }}
                >
                    <model-viewer
                        src="https://example.com/path/to/3d-model.glb"
                        alt="3D Model"
                        style={{ width: '80%', height: '80%' }}
                        auto-rotate
                        camera-controls
                    ></model-viewer>
                    <div
                        style={{
                            position: 'absolute',
                            top: '10%',
                            right: '10%',
                            backgroundColor: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                        }}
                    >
                        {subtitle}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
