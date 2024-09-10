import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';

import './css/my-reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
