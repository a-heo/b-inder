import React, { useState } from 'react';
import styled from 'styled-components';
import LoginModal from './LoginModal';

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

const SignIn = ({ login, enterLogin }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button>Sign Up</Button>
      {modal
        ? (
          <LoginModal
            modal={modal}
            setModal={setModal}
            changeModal={handleClick}
            login={login}
            enterLogin={enterLogin}
          />
        )
        : null}
    </div>
  );
};

export default SignIn;
