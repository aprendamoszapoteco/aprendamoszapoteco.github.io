import React from 'react';
import styled from 'styled-components';
import data from '../../data/support';

const EmailContact = styled.a`
  color: #008DFF;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Support = () => {
  return (
    <div
      className="p-3"
      style={ {backgroundColor: '#F8F8F8'} }
      id="support"
    >
      <h5 className="text-center fw-bold mb-3">¿No te funciono el enlace?</h5>
      <p>Comunícate bajo los siguientes enlaces:</p>
      <ul style={ {listStyleType: 'none', padding: 0} }>
        { data.map((email, index) =>
          <li className="text-center mb-2" key={ index }>
            <EmailContact href={ `mailto:${email}` }>{ email }</EmailContact>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Support;