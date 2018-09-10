import React from 'react';
import Bag from './components/Icons/Bag';
import School from './components/Icons/School';
import Code from './components/Icons/Code';
import Education from './Education';
import Employment from './Employment';
import Project from './Project';
import Hero from './Hero';
import resume from './resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Layout App__Layout">
        <div className="Layout__Nav">
          <nav className="Navbar">
            <div className="Navbar__Item">
              <a href="#education">
                <School className="Navbar__Icon" />
              </a>
            </div>
            <div className="Navbar__Item">
              <a href="#employment">
                <Bag className="Navbar__Icon" />
              </a>
            </div>
            <div className="Navbar__Item">
              <a href="#project">
                <Code className="Navbar__Icon" />
              </a>
            </div>
          </nav>
        </div>
        <div className="Layout__Main">
          <Hero
            name={resume.name}
            title={resume.title}
            email={resume.email}
            profiles={resume.profiles}
          />
        </div>
        <div className="Layout__Body">
          <div className="Layout__Section" id="education">
            <Education educations={resume.educations} />
          </div>
          <div className="Layout__Section" id="employment">
            <Employment employments={resume.employments} />
          </div>
          <div className="Layout__Section" id="project">
            <Project projects={resume.projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
