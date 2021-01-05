import React, { useState } from 'react';
import {
  ModalContainer, Background, ExitButton, ButtonBox, FormLabel, Form, Input, Submit,
} from './Modal';

const SignUpModal = ({
  signupModal, setSignupModal, saveNewUser, failMsg, setFailMsg
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
    const newUser = {};
    newUser.user = userInfo;
    newUser.pw = pwInfo;
    saveNewUser(newUser);
    setSignupModal(!signupModal);
    e.preventDefault();
  };

  return (
    <Background>
      {signupModal ? (
        <ModalContainer>
          <ButtonBox>
            <ExitButton type="button" onClick={() => { setSignupModal(!signupModal); }}>X</ExitButton>
          </ButtonBox>
          <p>Make an Account</p>
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
              <Submit type="submit" value="Sign Up" />
            </FormLabel>
            <FormLabel>
              {failMsg ? <p>Username already exists</p>
              : null}
            </FormLabel>
          </Form>
        </ModalContainer>
      )
        : null}
    </Background>
  );
};

export default SignUpModal;
