import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(65, 88, 75, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  height: 45%;
  width: 40%;
  flex-direction: column;
  margin: 15% 25% 25%;
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: rgba(0,0,0,0.28) 0px 8px 28px;
  padding: 15px 15px 15px 15px;
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
    position: flex;
    justify-content: right;
`;

const ExitButton = styled.button`
    font-size: 18px;
    cursor: pointer;
    text-align: right;
`;

export { ModalContainer, Background, ExitButton, ButtonBox };
