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
  const [lastname, saveLastname] = useState('');
  const [location, saveLocation] = useState('');
  const [email, saveEmail] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      saveUserInfo(e.target.value);
    }
    if (e.target.name === 'pw') {
      savePWInfo(e.target.value);
    }
    if (e.target.name === 'location') {
      saveLocation(e.target.name);
    }
    if (e.target.name === 'first') {
      saveFirstname(e.target.value);
    }
    if (e.target.name === 'last') {
      saveLastname(e.target.value);
    }
    if (e.target.name === 'email') {
      saveEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    const newUser = {};
    newUser.user = userInfo;
    newUser.pw = pwInfo;
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.location = location;
    newUser.email = email;
//error message does not load. fix later
    saveNewUser(newUser)
      .then(setSignupModal(!setSignupModal))
      .catch((e) => {
        console.log(e, 'singupModal error in handlesubmit');
        alert('cannot save info. try again');
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
              <Input type="text" name="first" placeholder="first name" onChange={handleChange} required />
            </FormLabel>
            <FormLabel>
              Last name:
              <Input type="text" name="last" placeholder="last name" onChange={handleChange} required />
            </FormLabel>
            <FormLabel>
              Email:
              <Input type="text" name="email" placeholder="email" onChange={handleChange} required />
            </FormLabel>
            <FormLabel>
              Username:
              <Input type="text" name="username" placeholder="username" onChange={handleChange} required />
            </FormLabel>
            <FormLabel>
              Password:
              <Input type="password" name="pw" placeholder="password" onChange={handleChange} required />
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
