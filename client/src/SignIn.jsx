import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display:flex; 
    justify-content: center;
`;

const Button = styled.button`
    display: flex;
    justify-content: space-between; 
    text-align: center;
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    font-family: 'bungee';
    font-size: 24px; 
    cursor:pointer; 
    width: auto;
`;

const SignIn = () => (
  <Box>
    <Button>Login</Button>
  </Box>
);

export default SignIn;
