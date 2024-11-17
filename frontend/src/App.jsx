import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </Layout>
  )
}

export default App