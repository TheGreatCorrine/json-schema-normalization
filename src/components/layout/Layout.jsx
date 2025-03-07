import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

// Use dynamic import and disable SSR
const TutorialGuide = dynamic(() => import('../TutorialGuide'), {
  ssr: false,
});

const Layout = ({ children }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  
  useEffect(() => {
    // Check if user is visiting for the first time
    const tutorialCompleted = localStorage.getItem('tutorialCompleted');
    if (!tutorialCompleted) {
      // If first visit, delay showing tutorial to give page time to load
      const timer = setTimeout(() => {
        setShowTutorial(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleStartTutorial = () => {
    setShowTutorial(true);
  };
  
  const handleCloseTutorial = () => {
    setShowTutorial(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar onGuideClick={handleStartTutorial} />
      <div className="pt-20 flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 introduction-section">
          {children}
        </main>
      </div>
      
      {typeof window !== 'undefined' && (
        <TutorialGuide 
          isOpen={showTutorial} 
          onClose={handleCloseTutorial} 
        />
      )}
    </div>
  );
};

export default Layout; 