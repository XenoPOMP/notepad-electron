import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux'
import App from './App';
import { store } from './assets/redux';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<ReduxProvider store={store}><App /></ReduxProvider>);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
