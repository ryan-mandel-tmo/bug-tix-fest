import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './Reducer'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

const store = (() => {
  const store = createStore(rootReducer)
  return store
})()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
