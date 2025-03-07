import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // 输出环境信息，帮助调试
  if (typeof window !== 'undefined') {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Base Path:', process.env.NEXT_PUBLIC_BASE_PATH || '/json-schema-normalization-demo');
  }
  
  return <Component {...pageProps} />;
}

export default MyApp; 