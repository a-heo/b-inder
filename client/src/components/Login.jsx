import React, { useState } from 'react';
import styled from 'styled-components';
import LoginModal from './LoginModal';

const Box2 = styled.div`
    display: flex;
    justify-content: right;
    align-items: right;
    text-align: right; 
`;

const Signin = styled.button`
    justify-content: right;
    align-items: right;
    text-align: right;
    background-color: #70af85;
    color: #FCF8E8;
    border: 2px #70af85; 
    border-radius: 5px;
`;

const Login = ({ login, enterLogin, loadUserInfo }) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
    if (modal) {
      enterLogin(false);
    }
  };

  return (
    <div>
      {login
        ? (
          <Box2>
            <Signin onClick={handleClick}>Logout</Signin>
          </Box2>
        )
        : (
          <Box2>
            <Signin onClick={handleClick}>Login</Signin>
            {modal
              ? (
                <LoginModal
                  modal={modal}
                  setModal={setModal}
                  changeModal={handleClick}
                  login={login}
                  enterLogin={enterLogin}
                  loadUserInfo={loadUserInfo}
                />
              )
              : null}
          </Box2>
        )}
    </div>
  );
};

export default Login;
