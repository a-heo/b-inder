import React from 'react';
import styled from 'styled-components';

import SignIn from './SignIn';
import NewLogin from './NewLogin';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const SignInContainer = ({
  login, enterLogin, loadUserInfo, modal, setModal, signupModal, setSignupModal
}) => (
  <Box>
    <SignIn
      login={login}
      enterLogin={enterLogin}
      loadUserInfo={loadUserInfo}
      modal={modal}
      setModal={setModal}
    />
    <NewLogin 
      login={login}
      enterLogin={enterLogin}
      loadUserInfo={loadUserInfo}
      signupModal={signupModal}
      setSignupModal={setSignupModal}
    />
  </Box>
);

export default SignInContainer;
