import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const TutorialGuide = ({ isOpen, onClose }) => {
  const [runTour, setRunTour] = useState(false);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // Add delay to ensure all elements are rendered
    if (isOpen) {
      const timer = setTimeout(() => {
        setSteps([
          {
            target: '.navbar-logo',
            content: 'Welcome to the JSON Schema Normalizer created by Corrine! This guide will walk you through the qualification task.',
            placement: 'bottom',
            disableBeacon: true,
          },
          {
            target: 'a[href*="introduction"]', // Use a more flexible selector
            content: 'The Introduction section briefly explains the background of the project, what JSON Schema Normalizer does, and why it\'s important.',
            placement: 'right',
          },
          {
            target: 'a[href*="get-started"]', // Use a more flexible selector
            content: 'The Get Started guide (not yet completed) will show you how to install and use the Python library in your projects. You can skip it for now.',
            placement: 'right',
          },
          {
            target: 'a[href*="reference"]', // Use a more flexible selector
            content: 'This part is not yet completed, you can skip it for now.',
            placement: 'right',
          },
          {
            target: 'a[href*="specification"]', // Use a more flexible selector
            content: (
              <div>
                The Specification section explains the normalization rules and standards in detail. <span style={{ fontWeight: 'bold' }}>Definitely check this part as it completes the qualification tasks.</span>
              </div>
            ),
            placement: 'right',
          },
          {
            target: '.normalization-link', // Use class name selector
            content: 'After reading the specification section, you can try the online version of the Normalization tool here.',
            placement: 'right',
            spotlightClicks: false,
          },
          {
            target: 'button:nth-of-type(1)', // Use a simpler selector
            content: 'If you need to revisit this tutorial at any time, just click the Guide button here!',
            placement: 'bottom',
          },
          {
            target: 'button:nth-of-type(2)', // Use a simpler selector
            content: 'Welcome Julian and other contributors! Please feel free to provide any suggestions or feedback to Corrine on this qualification task.',
            placement: 'bottom',
          },
        ]);
        setRunTour(true);
      }, 1000); // Increase delay time
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    
    console.log('Joyride callback:', type, status); // Add debug log
    
    // When the tutorial is finished or skipped
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
      onClose();
      
      // Save tutorial completion status to localStorage
      localStorage.setItem('tutorialCompleted', 'true');
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={runTour}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      disableScrolling={false} // Disable automatic scrolling
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: '#0c4da2',
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        buttonBack: {
          marginRight: 10,
        },
        buttonSkip: {
          color: '#666',
        },
      }}
      locale={{
        back: 'Back',
        close: 'Close',
        last: 'Finish',
        next: 'Next',
        skip: 'Skip',
      }}
    />
  );
};

export default TutorialGuide; 