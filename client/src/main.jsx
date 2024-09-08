import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './styles/index.css';
import { Provider } from 'react-redux';

// Redux Store
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
