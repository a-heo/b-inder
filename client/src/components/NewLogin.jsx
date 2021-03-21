import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 2vw;
    justify-content: center; 
    align-items: center;
    font-size: 2vw;
`;

const NewLogin = ({ signupModal, setSignupModal }) => (
  <div>
    <Button type="button" onClick={() => { setSignupModal(!signupModal); }}>Sign Up</Button>
  </div>
);

export default NewLogin;
