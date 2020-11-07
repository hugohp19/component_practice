import React, { Component } from 'react';
import './componentsCSS.css';

class Project extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div className='projects-cont'>
        <h3>{ this.props.title }</h3>
        <div className={ classes } ></div>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}

export default Project;
