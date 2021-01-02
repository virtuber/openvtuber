import React from 'react';
import MainView from './components/MainView';
import './App.css';
import VrmStateMessage from './protobufs/VrmStateMessage';
import { useVrmStore } from './utils/store';

interface AppProps {}

const App = ({}: AppProps) => {
  const updateVrmState = useVrmStore((state) => state.updateVrmState);
  const socket = new WebSocket('ws://localhost:42069');
  socket.binaryType = 'arraybuffer';

  // Listen for messages
  socket.addEventListener('message', (event) => {
    const buffer = new Uint8Array(event.data);
    const msg = VrmStateMessage.VrmStateMessage.decode(buffer);
    updateVrmState(msg);
  });

  return (
    <>
      <MainView />
    </>
  );
};

export default App;
