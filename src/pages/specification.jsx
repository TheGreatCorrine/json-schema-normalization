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
        
        <div className="space-y-4">
          <CollapsibleSection title="1. Introduction and Scope">
            <p className="mb-3">
              This specification defines the normalization of JSON Schema documents, providing a standard way to transform schemas 
              into a canonical form while preserving their validation semantics.
            </p>
            <p>
              The primary goals of JSON Schema normalization are:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To enable reliable comparison between semantically equivalent schemas</li>
              <li>To improve schema readability and maintainability</li>
              <li>To optimize schemas for validation performance</li>
              <li>To facilitate schema transformation and evolution</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="2. Common Use Cases ❗️">
            <p className="mb-3">
              JSON Schema normalization addresses several common use cases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schema comparison for semantic equivalence</li>
              <li>Schema versioning and change detection</li>
              <li>Schema optimization for validation performance</li>
              <li>Schema documentation generation</li>
              <li>Schema-based code generation</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="3. Potential Normalization Rulesets Based on Use Cases ❗️">
            <p className="mb-3">
              Different normalization goals may require different rulesets:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minimal:</strong> Basic property ordering and type normalization</li>
              <li><strong>Standard:</strong> Comprehensive normalization for most use cases</li>
              <li><strong>Strict:</strong> Maximum normalization with all optimizations</li>
              <li><strong>Custom:</strong> Tailored rulesets for specific applications</li>
            </ul>
            <p className="mt-3">
              Each ruleset can be configured to include or exclude specific normalization steps based on the requirements of the application.
            </p>
          </CollapsibleSection>
          
          <CollapsibleSection title="4. Terminology">
            <p className="mb-3">
              This specification uses terms defined in the JSON Schema specification, plus the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Normalized Schema:</strong> A JSON Schema that has been processed according to normalization rules</li>
              <li><strong>Semantic Equivalence:</strong> Two schemas that validate the same set of instances</li>
              <li><strong>Canonical Form:</strong> A standardized representation of a schema following specific rules</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="5. Property Ordering">
            <p className="mb-3">
              To ensure consistent representation, properties in objects should be ordered according to these rules:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Required properties come before optional properties</li>
              <li>Within each group (required/optional), properties are sorted alphabetically</li>
              <li>Schema keywords follow a standardized order (e.g., type, properties, required, etc.)</li>
            </ol>
          </CollapsibleSection>
          
          <CollapsibleSection title="6. Type Normalization">
            <p className="mb-3">
              Type declarations should be normalized according to these rules:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Convert type arrays to oneOf with individual type schemas when possible</li>
              <li>Normalize order of types in type arrays (alphabetical order)</li>
              <li>Explicitly declare implicit types (e.g., when format implies a type)</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="7. Reference Handling">
            <p className="mb-3">
              References ($ref) should be handled according to these rules:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resolve circular references to a specified depth</li>
              <li>Normalize reference paths (relative vs. absolute based on configuration)</li>
              <li>Inline references where appropriate (based on configuration)</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="8. Logical Keyword Optimization">
            <p className="mb-3">
              Logical keywords (allOf, anyOf, oneOf, not) should be optimized:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Flatten nested allOf arrays</li>
              <li>Merge properties from allOf objects when possible</li>
              <li>Sort oneOf/anyOf conditions by complexity or alphabetically</li>
              <li>Simplify redundant conditions</li>
            </ul>
          </CollapsibleSection>
          
          <CollapsibleSection title="9. Metadata Handling">
            <p>
              Metadata fields (title, description, examples, etc.) should be processed according to configuration:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Preserve all metadata (for documentation purposes)</li>
              <li>Remove all metadata (for minimal schemas)</li>
              <li>Selectively keep specific metadata fields</li>
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