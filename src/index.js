import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';

// images index.css
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='7a27ebb0-fef9-47e8-ac1c-672c3ed6f322' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
