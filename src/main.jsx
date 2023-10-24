import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Container/App.jsx'
import './index.css'
import StoreContextProvider from './Context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
);
