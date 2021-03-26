import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menutrigger = styled.button`
  background: #ffffff;
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto; /* Strictly for positioning */

  &:hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
span {
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  margin: 0 10px;
}

img {
  border-radius: 90px;
}
`;

const Menu = styled.nav`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  ${({ menu }) => menu && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
  
`;

const MenuLine = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuSect = styled.li`
  border-bottom: 1px solid #dddddd;
`;

const Menuatt = styled.button`
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
`;

const Profile = ({ enterLogin, setList }) => {
  const dropDownRef = useRef(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const pageClick = (e) => {
      console.log(e, 'menuclicked in Profile');
      if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target)) {
        setMenu(!menu);
      }
    };

    if (menu) {
      window.addEventListener('click', pageClick);
    }
    return () => {
      window.removeEventListener('click', pageClick);
    };
  }, [menu]);

  const handleClick = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  const handleBooks = (e) => {
      e.preventDefault();
      setMenu(!menu);
      setList(true);
  };

  const handleLogout = (e) => {
      e.preventDefault();
      setMenu(!menu);
      enterLogin(false);
  };

  return (
    <MenuContainer>
      <Menutrigger onClick={handleClick}>Profile</Menutrigger>
      <Menu ref={dropDownRef} menu={menu}>
        <MenuLine>
          <MenuSect>
            <Menuatt>info</Menuatt>
            <Menuatt onClick={handleBooks}>my books</Menuatt>
            <Menuatt onClick={handleLogout}>logout</Menuatt>
          </MenuSect>
        </MenuLine>
      </Menu>
    </MenuContainer>
  );
};

export default Profile;
