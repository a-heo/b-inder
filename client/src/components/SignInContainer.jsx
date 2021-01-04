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
  login, enterLogin, loadUserInfo, modal, setModal,
}) => (
  <Box>
    <SignIn
      login={login}
      enterLogin={enterLogin}
      loadUserInfo={loadUserInfo}
      modal={modal}
      setModal={setModal}
    />
    <NewLogin />
  </Box>
);

export default SignInContainer;
