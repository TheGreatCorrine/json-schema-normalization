import React, { useState, useEffect } from 'react';
import Joyride, { STATUS } from 'react-joyride';

const TutorialGuide = ({ isOpen, onClose }) => {
  const [runTour, setRunTour] = useState(false);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    // 添加延迟以确保所有元素都已渲染
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
            target: 'a[href*="introduction"]', // 使用更宽松的选择器
            content: 'The Introduction section briefly explains the background of the project, what JSON Schema Normalizer does, and why it\'s important.',
            placement: 'right',
          },
          {
            target: 'a[href*="get-started"]', // 使用更宽松的选择器
            content: 'The Get Started guide (not yet completed) will show you how to install and use the Python library in your projects. You can skip it for now.',
            placement: 'right',
          },
          {
            target: 'a[href*="reference"]', // 使用更宽松的选择器
            content: 'This part is not yet completed, you can skip it for now.',
            placement: 'right',
          },
          {
            target: 'a[href*="specification"]', // 使用更宽松的选择器
            content: (
              <div>
                The Specification section explains the normalization rules and standards in detail. <span style={{ fontWeight: 'bold' }}>Definitely check this part as it completes the qualification tasks.</span>
              </div>
            ),
            placement: 'right',
          },
          {
            target: 'a[href*="normalization"]', // 使用更宽松的选择器
            content: 'After reading the specification section, you can try the online version of the Normalization tool here.',
            placement: 'right',
          },
          {
            target: 'button:nth-of-type(1)', // 使用更简单的选择器
            content: 'If you need to revisit this tutorial at any time, just click the Guide button here!',
            placement: 'bottom',
          },
          {
            target: 'button:nth-of-type(2)', // 使用更简单的选择器
            content: 'Welcome Julian and other contributors! Please feel free to provide any suggestions or feedback to Corrine on this qualification task.',
            placement: 'bottom',
          },
        ]);
        setRunTour(true);
      }, 1000); // 增加延迟时间
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    
    console.log('Joyride callback:', type, status); // 添加调试日志
    
    // 当教程结束或被跳过时
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
      onClose();
      
      // 保存教程完成状态到 localStorage
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
      disableScrolling={false} // 禁用自动滚动
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