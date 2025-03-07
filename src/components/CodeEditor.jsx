import React from 'react';

const CodeEditor = ({ value, onChange, language, height, readOnly }) => {
  return (
    <div className="relative" style={{ height: height || '300px' }}>
      <textarea
        className={`w-full h-full p-4 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${readOnly ? 'bg-gray-50' : 'bg-white'}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        spellCheck="false"
        style={{ resize: 'none' }}
      />
      {language && (
        <div className="absolute top-0 right-0 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-bl-md rounded-tr-md">
          {language}
        </div>
      )}
    </div>
  );
};

export default CodeEditor; 