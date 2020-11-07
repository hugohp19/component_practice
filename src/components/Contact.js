import React from 'react';
import './componentsCSS.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const Contact = () =>{
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validation = (event) =>{
    event.preventDefault();
    let counter = 0;
    // console.log(event.target);
    // console.log(name);
    // console.log(email);
    // console.log(message);   
    setNameError('');
    setEmailError('');
    setMessageError('');

    if(!name){
      setNameError("Name is Required");
      counter++;
    }

    if(!email){
      setEmailError("Email is Required");
      counter++;
    } else if(!validateEmail(email)){
      setEmailError("Invalid Email");
      counter++;
    }

    if(!message){
      setMessageError("Message is Required");
      counter++;
    }

    if (counter === 0){
      alert("You're information have been submitted")
      setName('');
      setEmail('');
      setMessage('');
      setNameError('');
      setEmailError('');
      setMessageError('');
    }
  } 

  const handleChange = (event) =>{
    setName(event.target.value);
  }

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
  }

  const handleChangeMessage = (event) =>{
    setMessage(event.target.value);
  }
  

  return(
    <div className='contact-container' id='contact'>
      <h2>Contact Me</h2>
      <p>Please feel free to drop a line with compliments and good vibes</p>
      <Form style={{width: '400px', marginLeft: '0'}}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={handleChange}/>
          <p>{nameError}</p>
          <Form.Label style={{paddingTop: '20px'}}>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={handleChangeEmail} />
          <p>{emailError}</p>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3}  value={message} onChange={handleChangeMessage}/>
          <p>{messageError}</p>
        </Form.Group>
        <div>
          <Button variant="primary" type="submit" onClick={validation}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}


export default Contact;