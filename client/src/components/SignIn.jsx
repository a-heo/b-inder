import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: space-between; 
    text-align: right;
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    font-family: 'bungee';
    font-size: 24px; 
    cursor:pointer; 
    width: auto;
`;

const SignIn = () => (
  <div>
    <Button>Login</Button>
  </div>
);

export default SignIn;
