// L'ordre est important pour les imports. Mettre les styles de base en premier
import './assets/css/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
