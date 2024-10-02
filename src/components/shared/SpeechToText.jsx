
import React, { useState, useEffect } from 'react';
import MicIcon from '@mui/icons-material/Mic';

const SpeechToText = ({ onTranscript }) => {
    // Create state variables
    const [recognition, setRecognition] = useState(null);
    const [isRecognitionRunning, setIsRecognitionRunning] = useState(false);

    // Initialize SpeechRecognition
    useEffect(() => {
        // Check if the Web Speech API is available
        if ('webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            const recognitionInstance = new SpeechRecognition();

            // Set recognition parameters
            recognitionInstance.continuous = true;
            recognitionInstance.interimResults = false;
            recognitionInstance.lang = 'en-US'; // Set the language as desired

            // Event listener for receiving speech recognition results
            recognitionInstance.onresult = (event) => {
                const resultIndex = event.resultIndex;
                const transcriptResult = event.results[resultIndex][0].transcript;
                // Use the callback function to pass the transcript back to the parent component
                onTranscript(transcriptResult);
            };
            
            // Event listener for handling end of recognition
            recognitionInstance.onend = () => {
                setIsRecognitionRunning(false);
            };

            // Store the recognition instance in state
            setRecognition(recognitionInstance);

            // Cleanup function to stop recognition when component unmounts
            return () => {
                recognitionInstance.stop();
            };
        } else {
            console.error('Web Speech API is not supported in this browser.');
        }
    }, [onTranscript]);

    // Start speech recognition when MicIcon is clicked
    const startRecognition = () => {
        // Check if recognition is already running
        if (recognition && !isRecognitionRunning) {
            recognition.start();
            setIsRecognitionRunning(true);
        }
    };

    // Stop speech recognition when MicIcon is double-clicked
    const stopRecognition = () => {
        if (recognition && isRecognitionRunning) {
            recognition.stop();
            setIsRecognitionRunning(false);
        }
    };

    return (
        <div>
            <MicIcon
                onClick={startRecognition} // Start recognition on single click
                onDoubleClick={stopRecognition} // Stop recognition on double click
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
};

export default SpeechToText;
