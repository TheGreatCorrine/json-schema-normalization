import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';

export default function Home() {
  const [debug, setDebug] = useState({});
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDebug({
        pathname: window.location.pathname,
        href: window.location.href,
        origin: window.location.origin,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/json-schema-demo',
      });
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">JSON Schema Normalization</h1>
          <p className="text-xl text-gray-600">
            A tool for standardizing JSON Schema documents into a canonical form
          </p>
        </div>
        
        {/* 调试信息 */}
        <div className="bg-gray-100 p-4 rounded-md mb-8">
          <h2 className="text-lg font-semibold mb-2">Debug Info:</h2>
          <pre>{JSON.stringify(debug, null, 2)}</pre>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">What is JSON Schema?</h2>
            <p className="text-gray-700 mb-4">
              JSON Schema is a vocabulary that allows you to annotate and validate JSON documents. It provides a contract for what JSON data is required for a given application and how to interact with it.
            </p>
            <a href="https://json-schema.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Learn more about JSON Schema →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Normalize?</h2>
            <p className="text-gray-700 mb-4">
              JSON Schema allows the same validation rules to be expressed in multiple ways. Normalization converts schemas to a standard form, making them easier to compare, maintain, and process.
            </p>
            <a href="/introduction" className="text-blue-600 hover:underline">
              Explore normalization benefits →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 