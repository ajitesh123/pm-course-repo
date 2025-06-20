import React from 'react';

interface ErrorDisplayProps {
  title?: string;
  message: string | null;
}

export default function ErrorDisplay({ title = 'Error', message }: ErrorDisplayProps) {
  if (!message) return null;

  return (
    <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
      <p className="text-red-600">{title}: {message}</p>
    </div>
  );
} 