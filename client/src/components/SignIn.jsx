import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    justify-content: space-between; 
    background-color: #83A95C;
    border: 2px; 
    border-radius: 5px;
    font-family: 'bungee';
    font-size: 24px; 
    cursor:pointer; 
    width: auto;
`;

const SignIn = ({ modal, setModal }) => {
  // const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <Button onClick={handleClick}>Log In</Button>
  );
};

export default SignIn;
