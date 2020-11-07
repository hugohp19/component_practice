import React from 'react';
import './componentsCSS.css';
import Table from 'react-bootstrap/Table'

const Resume = () =>{
 
  return(
    <div className='resume-container' id='resume'>
      <h2>Resume</h2>
      <h3>James Howlett</h3>
      <p>(305) 123-4321</p>
      <p>logan@gmail.com</p>
      <a href='https://en.wikipedia.org/wiki/Wolverine_(character)'>Personal WebPage</a>
      
      <div className='table-container'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th  colSpan="4">Technical Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Languages</td>
              <td>HTML</td>
              <td>CSS</td>
              <td>Javascript</td>
            </tr>
            <tr>
              <td>Summary</td>
              <td  colSpan="3">A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.</td>
            </tr>
          </tbody>
        </Table>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th  colSpan="3">Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Time</th>
              <th>Job Description</th>
            </tr>
            <tr>
              <td>PDVSA</td>
              <td>2006 - 2012</td>
              <td>Data Analyst</td>
            </tr>
            <tr>
              <td>ECIS</td>
              <td>2012 - 2020</td>
              <td>Bilingual Teacher</td>
            </tr>
          </tbody>
        </Table>
      </div>
      

    </div>
  )

}


export default Resume;