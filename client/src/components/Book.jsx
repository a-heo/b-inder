import React from 'react';
import styled from 'styled-components';

const FadeSlide = styled.div`
  border: 1px;
`;

const Image = styled.img`
  height: 600px;
  width: 400px;
`;

const Book = ({ book }) => {
  // const [next, startNext] = useState(false);

  // const handleClick = () => {
  //   startNext(true);
  // };
  console.log('here');

  return (
    <div>
      <FadeSlide>
        <Image src={book.imageLinks.thumbnail} alt="bookimage" />
      </FadeSlide>
    </div>
  );
};

export default Book;
