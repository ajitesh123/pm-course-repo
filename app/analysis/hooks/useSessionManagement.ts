import { useState, useEffect } from 'react';
import { useSessionStore } from '../../store/sessionStore';

export default function useSessionManagement() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  
  // Use the Zustand store
  const { 
    sessionId, 
    sessionData, 
    sessionDetails,
    sessionAnalysis,
    setSessionId,
    setSessionData,
    setSessionDetails,
    setSessionAnalysis
  } = useSessionStore();

  // Function to fetch session details when button is clicked
  const fetchSessionDetails = async () => {
    if (!sessionId) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/tough-tongue/sessions/${sessionId}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch session details');
      }
      
      setSessionDetails(data);
    } catch (err: any) {
      console.error('Error fetching session details:', err);
      setError(err.message || 'An error occurred while fetching session details');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to analyze the session when button is clicked
  const analyzeSession = async () => {
    if (!sessionId) return;
    
    setIsAnalyzing(true);
    setAnalysisError(null);
    
    try {
      const response = await fetch('/api/tough-tongue/sessions/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze session');
      }
      
      setSessionAnalysis(data);
    } catch (err: any) {
      console.error('Error analyzing session:', err);
      setAnalysisError(err.message || 'An error occurred while analyzing the session');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Listen for iframe events
  useEffect(() => {
    const handleIframeEvents = (event: MessageEvent) => {
      // Optional origin verification for security
      // if (event.origin !== 'https://app.toughtongueai.com') return;

      const data = event.data;
      
      if (data && data.event) {
        console.log('Received event:', data);
        
        switch (data.event) {
          case 'onStart':
            console.log('Session started:', data);
            break;
            
          case 'onStop':
            console.log('Session stopped:', data);
            setSessionId(data.sessionId);
            setSessionData(data);
            break;
        }
      }
    };

    window.addEventListener('message', handleIframeEvents);
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleIframeEvents);
    };
  }, [setSessionId, setSessionData]);

  return {
    isLoading,
    isAnalyzing,
    error,
    analysisError,
    sessionId,
    sessionData,
    sessionDetails,
    sessionAnalysis,
    fetchSessionDetails,
    analyzeSession
  };
} 