import React, { useState } from 'react';
import { ModalContainer, Background, ExitButton, ButtonBox} from './Modal';

const LoginModal = ({ modal, changeModal, login, enterLogin }) => {
  const [userInfo, saveUserInfo] = useState('');
  const [pwInfo, savePWInfo] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      saveUserInfo({[e.target.name]: e.target.value});
    }
    if (e.target.name === 'pw') {
      savePWInfo({[e.target.name]: e.target.value});
    }
    console.log(userInfo, pwInfo);
  };

  const handleSubmit = (e) => {

  };

  return (
    <Background>
      {modal ? (
        <ModalContainer>
          <ButtonBox>
          <ExitButton type="button" onClick={() => changeModal()}>X</ExitButton>
          </ButtonBox>
          <p>Login</p>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" name="username" onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="text" name="pw" onChange={handleChange} />
            </label>
            <input type="submit" value="submit" />
          </form>
        </ModalContainer>
      )
        : null}
    </Background>
  );
};

export default LoginModal;