import React, { useState } from 'react';
import {
  ModalContainer, Background, ExitButton, ButtonBox, FormLabel, Form, Input, Submit,
} from './Modal';

const LoginModal = ({
  modal, changeModal, login, enterLogin, loadUserInfo
}) => {
  const [userInfo, saveUserInfo] = useState('');
  const [pwInfo, savePWInfo] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      saveUserInfo(e.target.value);
    }
    if (e.target.name === 'pw') {
      savePWInfo(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    const userData = {};
    userData.user = userInfo;
    userData.pw = pwInfo;
    loadUserInfo(userData);
    changeModal();
    e.preventDefault();
  };


  return (
    <Background>
      {modal ? (
        <ModalContainer>
          <ButtonBox>
            <ExitButton type="button" onClick={() => changeModal()}>X</ExitButton>
          </ButtonBox>
          <p>Login</p>
          <Form onSubmit={handleSubmit}>
            <FormLabel>
              Username:
              <Input type="text" name="username" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" name="pw" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              <Submit type="submit" value="submit" />
            </FormLabel>
          </Form>
        </ModalContainer>
      )
        : null}
    </Background>
  );
};

export default LoginModal;
