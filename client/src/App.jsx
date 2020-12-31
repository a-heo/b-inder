import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './login.jsx';
import NewLogin from './NewLogin.jsx';
import SignIn from './SignIn.jsx';
import Genres from './Genres.jsx'

const Body = styled.div`
    background-color: #FCF8E8;
    display: flex;
    flex-direction: column;
    font-family: 'bungee';
    color: #433D3C;
`;

const Title = styled.h1`
    font-family: 'bungee';
    font-size: 125px; 
    text-align: center;
    color: #f18c8e;
`;



const App = () => {
    const [login, enterLogin] = useState(false);
    return (
        <Body>
        <Login />
        <Title>b-inder</Title>     
        <NewLogin />
        <SignIn />
        <Genres />
        </Body>
    );
};

export default App;