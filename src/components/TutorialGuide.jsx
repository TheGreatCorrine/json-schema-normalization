import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const TutorialGuide = ({ isOpen, onClose }) => {
  const [runTour, setRunTour] = useState(false);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // Initialize steps when component mounts or isOpen becomes true
    if (isOpen) {
      setSteps([
        {
          target: '.navbar-logo',
          content: 'Welcome to the JSON Schema Normalizer created by Corrine! This guide will walk you through the qualification task.',
          placement: 'bottom',
          disableBeacon: true,
        },
        {
          target: 'a[href="/introduction"]',
          content: 'The Introduction section briefly explains the background of the project, what JSON Schema Normalizer does, and why it\'s important.',
          placement: 'right',
        },
        {
          target: 'a[href="/get-started"]',
          content: 'The Get Started guide (not yet completed) will show you how to install and use the Python library in your projects. You can skip it for now.',
          placement: 'right',
        },
        {
          target: 'a[href="/reference"]',
          content: 'This part is not yet completed, you can skip it for now.',
          placement: 'right',
        },
        {
          target: 'a[href="/specification"]',
          content: (
            <div>
              The Specification section explains the normalization rules and standards in detail. <span style={{ fontWeight: 'bold' }}>Definitely check this part as it completes the qualification tasks.</span>
            </div>
          ),
          placement: 'right',
        },
        {
          target: 'a[href="/normalization"]',
          content: 'After reading the specification section, you can try the online version of the Normalization tool here.',
          placement: 'right',
        },
        {
          target: 'button.text-gray-700.hover\\:text-gray-900:first-of-type',
          content: 'If you need to revisit this tutorial at any time, just click the Guide button here!',
          placement: 'bottom',
        },
        {
          target: 'button.text-gray-700.hover\\:text-gray-900:nth-of-type(2)',
          content: 'Welcome Julian and other contributors! Please feel free to provide any suggestions or feedback to Corrine on this qualification task.',
          placement: 'bottom',
        },
      ]);
      setRunTour(true);
    }
  }, [isOpen]);

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    
    // When the tutorial ends or is skipped
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
      onClose();
      
      // Save the tutorial completion status to localStorage
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