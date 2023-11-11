import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'

//basename={ process.env.PUBLIC_URL }
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
