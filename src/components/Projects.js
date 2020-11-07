import React from 'react';
import Project from './Project';
import projects from '../data/projects.json';
import './componentsCSS.css';

const Projects = () =>{
  const projectsArray = projects.allProjects;
  
  return(
    <div className='projects-container' id='portfolio'>
      <h2>My Projects</h2>
      <p>These are some of my projects</p>
      <div className='projects-holder'>
        {projectsArray && projectsArray.map((item, index) =>{
          return(
          <Project key={index} title={item.title} description = {item.description} imgName= {item.imgName}/>
          )
        })
        }
      </div>

    </div>
  )

}


export default Projects;