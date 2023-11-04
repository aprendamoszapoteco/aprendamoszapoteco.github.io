import styled from 'styled-components';

import data from '../../data/support';
import Subtitle from '../commons/Subtitle';

const EmailContact = styled.a`
  color: #0068BC;
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
      style={ {backgroundColor: '#DCEEF2'} }
      id="support"
    >
      <Subtitle>¿No te funciono el enlace?</Subtitle>
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