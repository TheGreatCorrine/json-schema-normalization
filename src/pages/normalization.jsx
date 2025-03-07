import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import CodeEditor from '../components/CodeEditor';

export default function Normalization() {
  const [inputSchema, setInputSchema] = useState('{\n  "type": "object",\n  "properties": {\n    "name": {\n      "type": "string"\n    },\n    "age": {\n      "type": "integer",\n      "minimum": 0\n    }\n  },\n  "required": ["name"]\n}');
  const [normalizedSchema, setNormalizedSchema] = useState('');
  const [error, setError] = useState('');

  // Handle normalization process
  const handleNormalize = () => {
    try {
      // Parse the input schema
      const schema = JSON.parse(inputSchema);
      
      // Perform basic normalization
      const normalized = normalizeSchema(schema);
      
      // Format the result with indentation
      setNormalizedSchema(JSON.stringify(normalized, null, 2));
      setError('');
    } catch (err) {
      setError(`Error: ${err.message}`);
      setNormalizedSchema('');
    }
  };

  // Basic schema normalization function
  const normalizeSchema = (schema) => {
    // Deep clone the schema to avoid modifying the original
    const result = JSON.parse(JSON.stringify(schema));
    
    // Sort properties alphabetically if they exist
    if (result.properties) {
      result.properties = sortObjectKeys(result.properties);
      
      // Normalize each property schema
      Object.keys(result.properties).forEach(key => {
        result.properties[key] = normalizeSchema(result.properties[key]);
      });
    }
    
    // Sort required array if it exists
    if (Array.isArray(result.required)) {
      result.required.sort();
    }
    
    // Sort object keys at the top level
    return sortObjectKeys(result);
  };

  // Helper function to sort object keys
  const sortObjectKeys = (obj) => {
    return Object.keys(obj).sort().reduce((sorted, key) => {
      sorted[key] = obj[key];
      return sorted;
    }, {});
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">JSON Schema Normalizer</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            This tool normalizes JSON Schema documents into a canonical form. Enter your JSON Schema below and click "Normalize" to see the result.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Input Schema</h2>
            <CodeEditor 
              value={inputSchema} 
              onChange={setInputSchema} 
              language="json"
              height="400px"
            />
            <button
              onClick={handleNormalize}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Normalize
            </button>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Normalized Schema</h2>
            {error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                {error}
              </div>
            ) : (
              <CodeEditor 
                value={normalizedSchema} 
                onChange={setNormalizedSchema} 
                language="json"
                height="400px"
                readOnly
              />
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">About Normalization</h2>
          <p className="mb-3">
            This online tool demonstrates a simplified version of JSON Schema normalization. The full library includes more advanced features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Resolving and inlining $ref references</li>
            <li>Normalizing type arrays to single types with oneOf</li>
            <li>Standardizing format values</li>
            <li>Removing redundant keywords</li>
            <li>Optimizing allOf, anyOf, and oneOf constructs</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 