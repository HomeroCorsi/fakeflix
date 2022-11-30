import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AuthProvider from './context/AuthProvider';
// import { AppRoutes } from './routes/AppRoutes';
import './index.css'

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
);



