// PerformanceData.js
import React, { useState, useEffect } from 'react';

const PerformanceData = () => {
  const [pageLoadTime, setPageLoadTime] = useState(null);

  useEffect(() => {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    setPageLoadTime(loadTime);
  }, []);

  return (
    <div className="performance-data">
      <h2>Performance Data</h2>
      <p>Page load time: {pageLoadTime}ms</p>
    </div>
  );
};

export default PerformanceData;
