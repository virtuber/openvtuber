import React from 'react';
import MainView from './components/MainView';
import './App.css';
import VrmStateMessage from './protobufs/VrmStateMessage';
import { useVrmStore } from './utils/store';

interface AppProps {}

const App = ({}: AppProps) => {
  const updateVrmState = useVrmStore((state) => state.updateVrmState);
  const socket = new WebSocket('ws://localhost:42069');

  // Listen for messages
  socket.addEventListener('message', (event) => {
    const data = atob(event.data);
    /*
    if (VrmStateMessage.VrmStateMessage.verify(data)) {
      const msg = VrmStateMessage.VrmStateMessage.decode(data);
      updateVrmState(msg);
    }
    */
    console.log('Message from server ', event.data);
  });

  return (
    <>
      <MainView />
    </>
  );
};

export default App;
