"use client";

import React from 'react';
import useSessionManagement from './hooks/useSessionManagement';
import ToughTongueIframe from './components/ToughTongueIframe';
import SessionInformation from './components/SessionInformation';
import ErrorDisplay from './components/ErrorDisplay';
import DataDisplay from './components/DataDisplay';

export default function AnalysisPage() {
  const {
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
  } = useSessionManagement();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Language Analysis</h1>
      
      <ToughTongueIframe />
      
      <SessionInformation 
        sessionId={sessionId}
        sessionData={sessionData}
        isLoading={isLoading}
        isAnalyzing={isAnalyzing}
        onFetchDetails={fetchSessionDetails}
        onAnalyzeSession={analyzeSession}
      />
      
      <ErrorDisplay message={error} />
      <ErrorDisplay title="Analysis Error" message={analysisError} />
      
      <DataDisplay 
        title="Session Details from API" 
        data={sessionDetails} 
      />
      
      <DataDisplay 
        title="Session Analysis Results" 
        data={sessionAnalysis} 
        bgColor="bg-green-50"
      />
    </div>
  );
} 