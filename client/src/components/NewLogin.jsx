import React from 'react';
import styled from 'styled-components';
import LoginModal from './LoginModal';

const Button = styled.button`
    justify-content: center; 
    align-items: center;
`;

const NewLogin = () => (
  <div>
    <Button>Login</Button>
  </div>
);

export default NewLogin;
