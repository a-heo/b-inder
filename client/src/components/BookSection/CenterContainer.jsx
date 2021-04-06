import React from 'react';
import styled, { keyframes } from 'styled-components';

import BookList from '../Pages/BookList';
import Genres from './Genres';
import Profile from '../Pages/Profile';

function blinkingEffect() {
  return keyframes`
    50% {
      color: #ffd66b;
    }
  `;
}

const Title = styled.h1`
    font-size: 6vw; 
    text-align: center;
    color: #f18c8e;
    margin-bottom: 5vw;
    animation: ${blinkingEffect} 7s linear infinite;

`;

const CenterContainer = ({
  userBooks, user, list, saveBookInfo, profile
}) => (
  <div>
    {list && (
      <BookList userBooks={userBooks} user={user} list={list} />
    )}
    {profile && (
      <Profile />
    )}
    {!list && !profile && (<div>
        <Title>b-inder</Title>
        <Genres saveBookInfo={saveBookInfo} />
      </div>
    )}
  </div>
);

export default CenterContainer;
