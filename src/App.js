import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        {/*<Main />
        
        
        
         */}
      </div>
    );
  }
}

export default App;
