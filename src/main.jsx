import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Container/App.jsx';
import './index.css';
import StoreContextProvider from './Context/StoreContext.jsx';
import store from './Redux/Store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Provider>
  </React.StrictMode>,
);
