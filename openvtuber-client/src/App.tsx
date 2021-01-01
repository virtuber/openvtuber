import React from 'react';
import MainView from './components/MainView';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './utils/store';

interface AppProps {}

function App({}: AppProps) {
  const store = createStore(rootReducer);
  return (
    <>
      <Provider store={store}>
        <MainView />
      </Provider>
    </>
  );
}

export default App;
