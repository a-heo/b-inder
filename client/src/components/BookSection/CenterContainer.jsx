import React from 'react';
import styled, { keyframes } from 'styled-components';

import BookList from '../Pages/BookList';
import Genres from './Genres';
import Profile from '../Pages/Profile';

const blinkingEffect = keyframes`
    50% {
      color: #ffd66b;
    }
  `;

const bounce = keyframes`
    0% {transform: translateY(0);}
    50% {transform: translateY(-25px);}
    100% {transform: translateY(0);}
`;

const Title = styled.h1`
    font-size: 6vw; 
    text-align: center;
    color: #f18c8e;
    margin-bottom: 5vw;
    animation: ${blinkingEffect} 7s linear infinite;
    &:hover {
      animation: ${bounce} 3s ease;
    }
`;

const CenterContainer = ({
  userBooks, user, list, saveBookInfo, profile, firstname, lastname, email, location
}) => (
  <div>
    {list && (
      <BookList userBooks={userBooks} user={user} list={list} />
    )}
    {profile && (
      <Profile 
        firstname={firstname}
        lastname={lastname}
        email={email}
        location={location} 
      />
    )}
    {!list && !profile && (<div>
        <Title>b-inder</Title>
        <Genres saveBookInfo={saveBookInfo} />
      </div>
    )}
  </div>
);

export default CenterContainer;
