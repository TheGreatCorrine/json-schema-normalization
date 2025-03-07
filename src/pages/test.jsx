export default function Test() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind 测试页面</h1>
      <p className="text-lg text-gray-700 mb-4">这是一个测试 Tailwind CSS 是否正常工作的页面。</p>
      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
        <p className="font-medium">如果您能看到这个框有灰色背景和圆角，说明 Tailwind 正常工作。</p>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        测试按钮
      </button>
    </div>
  );
} 