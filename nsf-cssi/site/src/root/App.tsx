import React from 'react'
import '../styles/App.css'
import { Application } from '../views/Application'
import { Checklist } from '../views/Checklist'
import { Architecture } from '../views/Architecture'
import { Performance } from '../views/Performance'
import { Home } from '../views/Home'
import { References } from '../views/References'
import { Research } from '../views/Research'
import { Budget } from '../views/Budget'
import { Timeline } from '../views/Timeline'
import { Integration } from '../views/Integration'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export const App: React.FC = () => {
  const base = import.meta.env.BASE_URL || '/'
  return (
    <BrowserRouter basename={base}>
      <div>
        <nav className="nav-container">
          <div className="nav container">
            <NavLink className="logo" to="/" aria-label="PolicyEngine Home">
              <img src={`${base}assets/policyengine-logo.svg`} alt="PolicyEngine" />
            </NavLink>
            <ul className="nav-links">
              <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
              <li><NavLink to="/application" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Application</NavLink></li>
              <li><NavLink to="/checklist" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Checklist</NavLink></li>
              <li><NavLink to="/architecture" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Architecture</NavLink></li>
              <li><NavLink to="/performance" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Performance</NavLink></li>
              <li><NavLink to="/budget" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Budget</NavLink></li>
              <li><NavLink to="/timeline" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Timeline</NavLink></li>
              <li><NavLink to="/integration" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Integration</NavLink></li>
              <li><NavLink to="/research" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Research</NavLink></li>
              <li><NavLink to="/references" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>References</NavLink></li>
            </ul>
          </div>
        </nav>
        <main className="page">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/application" element={<Application />} />
              <Route path="/checklist" element={<Checklist />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/integration" element={<Integration />} />
              <Route path="/research" element={<Research />} />
              <Route path="/references" element={<References />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}