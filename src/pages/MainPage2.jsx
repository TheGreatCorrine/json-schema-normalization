import React from 'react';
import Layout from '../components/layout/Layout';

export default function MainPage2() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">JSON Schema Normalization</h1>
          <p className="text-xl text-gray-600">
            A tool for standardizing JSON Schema documents into a canonical form
          </p>
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
        
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-100 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            Ready to normalize your JSON Schemas? Our library makes it easy to integrate schema normalization into your workflow.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
              Installation Guide
            </a>
            <a href="/reference" className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-200 px-6 py-2 rounded-md transition-colors">
              API Reference
            </a>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Canonical Form</h3>
              <p className="text-gray-600">
                Convert semantically equivalent schemas to identical JSON documents
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and efficiency, even with large and complex schemas
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <div className="text-blue-600 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Configurable</h3>
              <p className="text-gray-600">
                Customize normalization rules to meet your specific requirements
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
              <p className="text-gray-700 mb-4">
                Check out our documentation to learn how to integrate JSON Schema Normalization into your projects.
              </p>
              <a href="/introduction" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                Read the Docs
              </a>
            </div>
            <div className="md:w-1/3">
              <img src="/code-example.png" alt="Code Example" className="rounded-md shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 