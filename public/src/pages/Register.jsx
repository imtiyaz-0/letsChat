import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Logo from '../assets/logo.svg';
function Register() {

  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("form");
  }
  const handleChange=(event)=>{}
  return (
    <>
    <FormContainer>
     <form onSubmit={(event)=>handleSubmit(event)} ></form>
     <div className='brand' >
      <img src={Logo} alt='Logo' ></img>
      <h1>Snappy</h1>
     </div>
     <input type='text' placeholder='Username' name='username' onChange={(e)=>handleChange(e)} />
     <input type='email' placeholder='Email' name='email' onChange={(e)=>handleChange(e)} />
     <input type='password' placeholder='Password' name='password' onChange={(e)=>handleChange(e)} />
     <input type='password' placeholder='Confirm Password' name='confirm password' onChange={(e)=>handleChange(e)}/>

     <button type='submit'> Create User</button>
     <span> Already have an account ? <Link to="/login"> Login</Link> </span>
    </FormContainer>
  </>
  )
}

const FormContainer = styled.div``;

export default Register
