import React, { useState } from 'react';
import {
  ModalContainer, Text, Background, ExitButton, ButtonBox, FormLabel, Form, Input, Submit,
} from './Modal';

const SignUpModal = ({
  signupModal, setSignupModal, saveNewUser, failMsg, setFailMsg
}) => {
  const [userInfo, saveUserInfo] = useState('');
  const [pwInfo, savePWInfo] = useState('');
  const [firstname, saveFirstname] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      saveUserInfo(e.target.value);
    }
    if (e.target.name === 'pw') {
      savePWInfo(e.target.value);
    }
    if (e.target.name === 'location') {
      //save location into state
    }
  };

  const handleSubmit = (e) => {
    const newUser = {};
    newUser.user = userInfo;
    newUser.pw = pwInfo;
//error message does not load. fix later
    saveNewUser(newUser)
      .then(() => {
        if (!failMsg) {
          setSignupModal(!signupModal);
        }
      });

    e.preventDefault();
  };

  return (
    <Background onClick={() => { setSignupModal(false)}}>
      {signupModal ? (
        <ModalContainer onClick={e => {e.stopPropagation()}}>
          <ButtonBox>
            <Text>Make an Account</Text>
            <ExitButton type="button" onClick={() => { setSignupModal(!signupModal); }}>X</ExitButton>
          </ButtonBox>
          <Form onSubmit={handleSubmit}>
            <FormLabel>
              First name:
              <Input type="text" name="first" placeholder="first name" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              Last name:
              <Input type="text" name="last" placeholder="last name" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              Username:
              <Input type="text" name="username" placeholder="username" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" name="pw" placeholder="password" onChange={handleChange} />
            </FormLabel>
            <FormLabel>
              Nearest Location
            </FormLabel>
            <FormLabel font-size="1vw">
              <Input type="radio" name="location" value="nyc" onChange={handleChange} />
              New York
              <Input type="radio" name="location" value="portland" onChange={handleChange} />
              Portland
              <Input type="radio" name="location" value="chicago" onChange={handleChange} />
              Chicago
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
