import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventFinderManagement from './pages/EventFinderManagement'
import CropDiseaseDetection from './pages/CropDiseaseDetection'

function App() {
  return (
    <>
      <header>
        <nav>
          <h2>Mabel Cobbinah</h2>

          <div className="nav-links">
            <a href="/#about">About</a>
            <a href="/#skills">Skills</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>
      </header>

   <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/projects/eventfinder-management"
    element={<EventFinderManagement />}
  />

  <Route
    path="/projects/crop-disease-detection"
    element={<CropDiseaseDetection />}
  />
</Routes>

      <footer>
        <p>© 2026 Mabel Cobbinah. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App