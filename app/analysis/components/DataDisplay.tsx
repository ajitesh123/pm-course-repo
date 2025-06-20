import React from 'react';

interface DataDisplayProps {
  title: string;
  data: any;
  bgColor?: string;
}

export default function DataDisplay({ title, data, bgColor = 'bg-gray-50' }: DataDisplayProps) {
  if (!data) return null;

  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-sm mb-6`}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-white p-4 rounded border">
        <pre className="bg-gray-100 p-3 rounded overflow-auto mt-2">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
} 