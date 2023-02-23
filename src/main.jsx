import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import './styles/headerfooter/headerfooter.css'
import './styles/home/home.css'
import './styles/matches/matches.css'
import './styles/toppicks/toppicks.css'
import './styles/match/match.css'
import './styles/slider/slider.css'
import './styles/fetchresults/fetchresults.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
