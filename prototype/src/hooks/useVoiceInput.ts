import { useState, useCallback } from 'react';
import { reportError } from '../utils/errorReporting';

export function useVoiceInput() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Voice recognition is not supported in your browser.');
      return;
    }

    try {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');
        setTranscript(transcript);
      };

      recognition.onerror = (event: any) => {
        setError('Error occurred during voice recognition.');
        reportError(new Error(event.error), {
          level: 'error',
          component: 'VoiceInput',
          event: event.error
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to start voice recognition');
      setError(error.message);
      reportError(error, {
        level: 'error',
        component: 'VoiceInput',
        function: 'startListening'
      });
    }
  }, []);

  const stopListening = useCallback(() => {
    setIsListening(false);
    setTranscript('');
  }, []);

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    resetTranscript: () => setTranscript('')
  };
}