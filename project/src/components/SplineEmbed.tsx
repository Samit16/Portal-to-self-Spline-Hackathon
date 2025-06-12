import React from 'react';

interface SplineEmbedProps {
  url?: string;
  className?: string;
  placeholder: string;
}

export const SplineEmbed: React.FC<SplineEmbedProps> = ({ url, className, placeholder }) => {
  if (url) {
    return (
      <iframe
        src={url}
        className={`w-full h-full border-none ${className || ''}`}
        title="Spline 3D Scene"
      />
    );
  }

  // Placeholder component for when Spline URL is not provided
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg ${className || ''}`}>
      <div className="text-center text-gray-400">
        <div className="text-6xl mb-4 opacity-50">🌌</div>
        <p className="text-sm">{placeholder}</p>
        <p className="text-xs mt-2 opacity-75">Replace with your Spline embed URL</p>
      </div>
    </div>
  );
};