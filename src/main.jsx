import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mobile from './Mobile.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

function ResponsiveApp() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <React.StrictMode>
      {isMobile ? <Mobile /> : <App />}
    </React.StrictMode>
  );
}

root.render(<ResponsiveApp />);