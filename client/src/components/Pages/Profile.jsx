import React from 'react';
import styled from 'styled-components';


const TableDiv = styled.div`
  justify-content: center;
`;

const ProfileTable = styled.table`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4vh;
  font-size: 3vw;
`;

const Profile = ({
  firstname, lastname, email, location,
}) => (
  <TableDiv>
    <ProfileTable>
      <tr>
        <th>Name</th>
        <td>
          {firstname}
          {' '}
          {lastname}
        </td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{email}</td>
      </tr>
      <tr>
        <th>Location</th>
        <td>{location}</td>
      </tr>
    </ProfileTable>
  </TableDiv>
);

export default Profile;
