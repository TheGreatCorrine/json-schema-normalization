import React from 'react';
import Layout from '../components/layout/Layout';

export default function GetStarted() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Get Started (Planned)</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-700">
            This section is currently under development. The JSON Schema Normalization library 
            will be available for installation soon. Please check back later for complete 
            installation and usage instructions.
          </p>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Planned Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Python library for JSON Schema normalization</li>
              <li>Command-line interface for batch processing</li>
              <li>Integration with popular JSON Schema validation tools</li>
              <li>Comprehensive documentation and examples</li>
              <li>Performance optimizations for large schemas</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Planned Installation (Python)</h2>
            <div className="bg-gray-800 text-white p-4 rounded-md">
              <pre><code>pip install json-schema-normalizer  # Coming soon</code></pre>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Planned Usage</h2>
            <div className="bg-gray-800 text-white p-4 rounded-md">
              <pre><code>{`from json_schema_normalizer import normalize

# Load your schema
schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "integer", "minimum": 0}
    },
    "required": ["name"]
}

# Normalize it
normalized = normalize(schema)

# Use the normalized schema
print(normalized)`}</code></pre>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-4">
              Want to be notified when the library is available? Check back soon for updates
              or follow the project on GitHub.
            </p>
            <a 
              href="https://github.com/TheGreatCorrine/json-schema-demo" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 