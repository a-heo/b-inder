import React, { useState } from 'react';
import styled from 'styled-components';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  padding: 25px;
`;

const BookContainer = ({ data, click, saveBookInfo }) => {
    const [drag, setDrag] = useState(false);
    const [hover, setHover] = useState(0);
    const [animation, setAnimation] = useState('none');
    const [currentBook, setCurrentBook] = useState([]);

    const handleMouseOver = type => {
        setHover(type);
    }

    const handleMouseClick = (click, ) => {
        setDrag(click);
        // if (!click && hover) {
        //     hover === "yes" ? 
        // }
    }

    return (
    <div>
    {/* { carousel 
      ? ( */}
          <WholeContainer>
              <ButtonContainer>
                  <button type="button" onClick={() => {click()}}>Change Genre</button>
              </ButtonContainer>
          </WholeContainer>
      {/* )
      : null} */}
    </div>
  );
};

export default BookContainer;
