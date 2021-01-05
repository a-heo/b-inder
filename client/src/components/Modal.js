import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(245, 245, 245, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 45%;
  width: 40%;
  margin: 15% 25% 25%;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: rgba(0,0,0,0.28) 0px 8px 28px;
  padding: 15px 15px 15px 15px;
  font-size: 3vw;
  -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
`;

// @-webkit-keyframes animatetop {
//     from {top:-300px; opacity:0}
//     to {top:0; opacity:1}
// }
// @keyframes animatetop {
//     from {top:-300px; opacity:0}
//     to {top:0; opacity:1}
// }
const ButtonBox = styled.div`
    display: flex;
    ${'' /* flex-direction: row-reverse; */}
    justify-content: flex-end;
`;

const ExitButton = styled.button`
  flex-direction: row-reverse;
  font-size: 3vw;
  cursor: pointer;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vw;
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 1vw;
  font-size: 2vw;
`;

const Input = styled.input`
  padding: 2% 5%; 
  &:focus {
    background-color: #ffe0d8;
    border: 1px #83a95c;
  }
`;

const Submit = styled.input`
  margin: 2vw;
  background-color: #83A95C;
  border: 2px #70af85; 
  border-radius: 5px;
  font-size: 2vw;
  cursor:pointer; 
  font-family: 'bungee';
  &:hover {
      font-weight: 900;
      background-color: #ff9b93;
    }
`;

export { ModalContainer, Background, ExitButton, ButtonBox, FormLabel, Form, Input, Submit };
