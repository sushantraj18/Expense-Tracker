import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Index}/>
      <Route path="*" Component={PageNotFound}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App