import React from 'react';
import MainView from './components/MainView';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './utils/store';
import VrmStateMessage from './protobufs/VrmStateMessage';
import { updateVrmState } from './vrm/VrmActions';

interface AppProps {}

const App = ({}: AppProps) => {
  const store = createStore(rootReducer);
  const socket = new WebSocket('ws://localhost:42069');

  // Listen for messages
  socket.addEventListener('message', (event) => {
    const data = atob(event.data);
    console.log(data);
    if (VrmStateMessage.VrmStateMessage.verify(data)) {
      const msg = VrmStateMessage.VrmStateMessage.decode(data);
      updateVrmState(msg);
    }

    console.log('Message from server ', event.data);
  });

  return (
    <>
      <Provider store={store}>
        <MainView />
      </Provider>
    </>
  );
};

export default App;
