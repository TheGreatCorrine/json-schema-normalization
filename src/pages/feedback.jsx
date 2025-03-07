import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加发送反馈的逻辑
    console.log('提交反馈:', { feedback, email });
    setSubmitted(true);
    // 重置表单
    setFeedback('');
    setEmail('');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">反馈</h1>
        
        <p className="text-lg mb-6">
          我们非常重视您的反馈。请告诉我们您对 JSON Schema Normalization 的想法、建议或问题。
        </p>
        
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
            感谢您的反馈！我们会认真考虑您的意见。
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="feedback" className="block text-lg font-medium mb-2">
              您的反馈
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="请在这里输入您的反馈..."
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              电子邮箱（可选）
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="您的电子邮箱地址"
            />
            <p className="text-sm text-gray-500 mt-1">
              如果您希望我们回复您的反馈，请提供您的电子邮箱地址。
            </p>
          </div>
          
          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              提交反馈
            </button>
          </div>
        </form>
        
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">其他联系方式</h2>
          <p className="text-lg mb-4">
            您也可以通过以下方式与我们联系：
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              <a href="https://github.com/your-username/json-schema-normalization/issues" className="text-blue-600 hover:underline">
                GitHub Issues
              </a>
              {' - 报告 bug 或提出功能请求'}
            </li>
            <li>
              <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
                电子邮件
              </a>
              {' - 直接联系项目维护者'}
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 