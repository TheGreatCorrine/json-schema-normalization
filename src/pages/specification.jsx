import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

// Component for collapsible section
const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md mb-3">
      <button
        className={`w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors ${isOpen ? 'border-b border-gray-200' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Specification() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">JSON Schema Normalization Specification</h1>
        
        <p className="text-lg mb-8">
          This specification defines the rules and processes for normalizing JSON Schema documents into a canonical form.
          Click on each section to expand and view the details.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          
          <CollapsibleSection title="1. Introduction">
            <p>
              JSON Schema normalization is the process of transforming different but semantically equivalent schema 
              representations into a single canonical form. This makes schema comparison, validation, and maintenance 
              more efficient and reliable.
            </p>
          </CollapsibleSection>
          
          <CollapsibleSection title="2. Basic Normalization Rules">
            <ul className="list-disc pl-6 space-y-2">
              <li>Sort all object properties alphabetically</li>
              <li>Sort arrays of primitive values (strings, numbers) alphabetically or numerically</li>
              <li>Remove redundant keywords that don't affect validation behavior</li>
              <li>Standardize equivalent constructs to a single representation</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="3. Type Normalization">
            <p className="mb-3">
              Type keywords can be expressed in multiple ways in JSON Schema. The normalization process standardizes these representations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Convert type arrays (e.g., <code>{`{"type": ["string", "null"]}`}</code>) to single types with oneOf</li>
              <li>Standardize type names to lowercase</li>
              <li>Order multiple types consistently</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="4. Array Keyword Normalization">
            <p className="mb-3">
              Array-related keywords are normalized according to these rules:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sort items in arrays of schemas</li>
              <li>Normalize additionalItems and items keywords</li>
              <li>Standardize minItems and maxItems</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="5. Object Keyword Normalization">
            <p className="mb-3">
              Object-related keywords are normalized as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sort required property names alphabetically</li>
              <li>Normalize properties and additionalProperties</li>
              <li>Standardize minProperties and maxProperties</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="6. Reference Resolution">
            <p className="mb-3">
              $ref keywords are processed according to these rules:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resolve all references to their target schemas</li>
              <li>Replace references with inline schemas where appropriate</li>
              <li>Normalize circular references</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="7. Format Standardization">
            <p className="mb-3">
              Format values are standardized to ensure consistency:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Convert format values to lowercase</li>
              <li>Map equivalent formats to a canonical representation</li>
              <li>Remove non-standard formats or convert them to standard equivalents</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="8. Logical Keyword Optimization">
            <p className="mb-3">
              Logical keywords (allOf, anyOf, oneOf, not) are optimized:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Flatten nested allOf arrays</li>
              <li>Remove redundant conditions</li>
              <li>Merge compatible schemas where possible</li>
              <li>Simplify logical constructs that can be expressed more directly</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="9. Metadata Handling">
            <p className="mb-3">
              Metadata keywords are processed according to configuration:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Preserve or remove title, description, default, examples, etc.</li>
              <li>Standardize format of preserved metadata</li>
              <li>Sort examples and other array metadata</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="10. Implementation Guidelines">
            <p>
              When implementing a JSON Schema normalizer, follow these guidelines to ensure consistent behavior 
              across different platforms and languages. The normalization process should be idempotent - 
              normalizing an already normalized schema should produce the same result.
            </p>
          </CollapsibleSection>
        </div>
      </div>
    </Layout>
  );
} 