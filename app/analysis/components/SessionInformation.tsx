import React from 'react';

interface SessionInformationProps {
  sessionId: string | null;
  sessionData: any;
  isLoading: boolean;
  isAnalyzing: boolean;
  onFetchDetails: () => void;
  onAnalyzeSession: () => void;
}

export default function SessionInformation({
  sessionId,
  sessionData,
  isLoading,
  isAnalyzing,
  onFetchDetails,
  onAnalyzeSession
}: SessionInformationProps) {
  if (!sessionData) return null;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Session Information</h2>
      <div className="bg-white p-4 rounded border">
        <p><strong>Session ID:</strong> {sessionId}</p>
        <p className="mt-4"><strong>Full Session Data:</strong></p>
        <pre className="bg-gray-100 p-3 rounded overflow-auto mt-2">
          {JSON.stringify(sessionData, null, 2)}
        </pre>
        
        {/* Action Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={onFetchDetails}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Fetch Session Details'}
          </button>
          
          <button
            onClick={onAnalyzeSession}
            disabled={isAnalyzing}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Session'}
          </button>
        </div>
      </div>
    </div>
  );
} 