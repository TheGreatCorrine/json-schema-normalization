import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, icon, title, isActive }) => {
  return (
    <Link href={href}>
      <div className={`flex items-center px-4 py-2 my-1 rounded-md ${isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'hover:bg-gray-50 text-gray-700'}`}>
        <span className="mr-3 text-lg">{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const router = useRouter();
  
  return (
    <div className="w-64 border-r h-screen p-4 bg-white sidebar-nav">
      <div className="mb-6 px-4 py-2">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Documentation</h3>
      </div>
      <NavItem 
        href="/introduction" 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        } 
        title="Introduction" 
        isActive={router.pathname === '/introduction'}
      />
      <NavItem 
        href="/get-started" 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        } 
        title="Get Started" 
        isActive={router.pathname === '/get-started'}
      />
      <NavItem 
        href="/reference" 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        } 
        title="Reference" 
        isActive={router.pathname === '/reference'}
      />
      
      <div className="mb-6 mt-8 px-4 py-2">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Specification</h3>
      </div>
      <NavItem 
        href="/specification" 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        } 
        title="Specification" 
        isActive={router.pathname.startsWith('/specification')}
      />
      <NavItem 
        href="/normalization" 
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        } 
        title="Normalization" 
        isActive={router.pathname === '/normalization'}
      />
    </div>
  );
};

export default Sidebar; 