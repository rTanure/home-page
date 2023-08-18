import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/reset.css'
import './style/general.css'
import './style/colors.css'
import './style/animations.css'
import './style/button.css'
import './style/icons.css'
import './style/font-mfizz.css'

import RoutedPage from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RoutedPage/>
  </React.StrictMode>
)
