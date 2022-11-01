import React from 'react';
import Main from './components/main';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Store } from './redux/store';

function App() {
  return (
    <Provider store={Store} >
      <div className='App'>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
