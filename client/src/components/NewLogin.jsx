import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    font-family: 'bungee';
    font-size: 24px; 
    cursor:pointer; 
    width: auto;
`;

const NewLogin = () => (
  <div>
    <Button>Sign Up</Button>
  </div>
);

export default NewLogin;
