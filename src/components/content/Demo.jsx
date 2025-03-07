import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

const Demo = () => {
  const [inputSchema, setInputSchema] = useState({
    type: ["string", "null"],
    enum: ["value1", null, "value2"],
    default: "value1"
  });
  
  const [normalizedSchema, setNormalizedSchema] = useState(null);
  
  const handleNormalize = () => {
    // 模拟标准化过程
    const normalized = {
      type: ["null", "string"],
      enum: [null, "value1", "value2"],
      default: "value1"
    };
    
    setNormalizedSchema(normalized);
  };
  
  const handleInputChange = (e) => {
    try {
      const parsed = JSON.parse(e.target.value);
      setInputSchema(parsed);
    } catch (error) {
      // 处理 JSON 解析错误
      console.error('JSON 解析错误:', error);
    }
  };
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">交互式演示</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <h4 className="font-medium mb-2">输入 Schema</h4>
          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-md font-mono text-sm"
            value={JSON.stringify(inputSchema, null, 2)}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <h4 className="font-medium mb-2">标准化结果</h4>
          {normalizedSchema ? (
            <pre className="w-full h-40 p-3 border border-gray-300 rounded-md font-mono text-sm overflow-auto bg-white">
              {JSON.stringify(normalizedSchema, null, 2)}
            </pre>
          ) : (
            <div className="w-full h-40 p-3 border border-gray-300 rounded-md flex items-center justify-center text-gray-500 bg-white">
              点击"标准化"按钮查看结果
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={handleNormalize}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        标准化
      </button>
    </div>
  );
};

export default Demo; 