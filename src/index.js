import React from 'react';
import ReactDOM from 'react-dom';
// import { SpeechProvider } from '@speechly/react-client';

// import { Provider } from './context/context';
import App from './App';

// images index.css
import './index.css';

ReactDOM.render(
  // <SpeechProvider>
  //   <Provider>
      <App />
  //   </Provider>
  // </SpeechProvider>
  ,document.getElementById('root'),
);
