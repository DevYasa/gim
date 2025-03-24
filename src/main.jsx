import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // Changed from BrowserRouter
import App from './App.jsx'
import './index.css'

// Wait for CSS to be loaded
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <HashRouter> {/* Changed from BrowserRouter */}
        <App />
      </HashRouter>
    </React.StrictMode>,
  )
})