import React from 'react';
import Layout from '../components/layout/Layout';

export default function Introduction() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">JSON Schema Normalizer</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg">
            The normalizer is a Python library which performs the normalization and emits the normalized schema.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Normalize JSON Schemas?</h2>
          
          <p>
            JSON Schema provides a powerful specification for validating JSON data, but the same validation constraints can often be expressed in multiple equivalent ways. This creates challenges for:
          </p>
          
          <p className="text-gray-300 italic my-4">
            (skipped for now)
          </p>
          
          <p>
            There are existing implementations of JSON Schema normalization, including the <a href="https://github.com/python-jsonschema/hypothesis-jsonschema/blob/master/src/hypothesis_jsonschema/_canonicalise.py" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Hypothesis normalizer</a>. While the proposed JSON Schema Normalizer aims to implement features that current tools already offer, it specifically focuses on addressing these challenges by transforming schemas into canonical forms <strong>according to configurable rules</strong>. The library maintains validation semantics while producing more efficient, consistent, and comparable schemas, based on different use cases.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Possible Configurable Rules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-2">Property Ordering</h3>
              <p>Sort object properties alphabetically or according to a predefined order to ensure consistent representation.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-2">Reference Resolution</h3>
              <p>Choose whether to resolve $ref references inline or maintain them with standardized paths.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-2">Metadata Preservation</h3>
              <p>Configure which metadata fields (like descriptions, titles, examples) to preserve or remove.</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-lg mb-2">Constraint Simplification</h3>
              <p>Simplify redundant or overlapping constraints while maintaining the same validation behavior.</p>
            </div>
          </div>
          
          {/* Ready to get started section removed */}
          
          {/* Need Help section removed */}
        </div>
      </div>
    </Layout>
  );
} 