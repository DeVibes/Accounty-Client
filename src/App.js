import React from 'react'

import './App.css'
import DesktopViewRestrictor from './utils/DesktopViewRestrictor'
import { Router } from './modules/Router'
import AppProviders from './shared/components/AppProviders'

const App = () => {
  return (
    <AppProviders>
      <DesktopViewRestrictor>
        <Router />
      </DesktopViewRestrictor>
    </AppProviders>
  )
}

export default App
