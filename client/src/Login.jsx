import React, { useState } from 'react';
import styled from 'styled-components';

const Signin = styled.button`
    justify-content: space-between;
    align-items: center;
    background-color: #70af85;
    font-family: 'bungee';
    font-size: 25px;
    color: #FCF8E8;
    border: 2px #70af85; 
    border-radius: 5px;
    width: auto; 
`;

const Login = () => {

    return (
        <div>
            <Signin>Login</Signin> 
        </div>
    )
}

export default Login;