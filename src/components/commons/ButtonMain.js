import React, { useState } from 'react';
import '../../styles/styleButtonMain.css';

const ButtonMain = () => {
  const links = [
    'https://www.youtube.com/watch?v=IaK7D_o8VYw',
    'https://www.youtube.com/watch?v=hZDaS9xyINI'
  ];
  const [platform, setPlatform] = useState(navigator.platform);
  const [link, setLink] = useState(links[platform === 'Win32' ? 0 : 1]);

  const changePlatform = (e) => {
    setPlatform(e.target.name);
    setLink(links[e.target.name === 'Win32' ? 0 : 1]);
  };

  return (
    <div className="btn-group">
      <a role="button" className="btn button"
        href={ link } target="_blank"
        rel="noreferrer"
      >
        <p style={ {
          marginBottom: '4px',
          fontSize: '28px',
          fontWeight: 'bold'
        } }
        >Descarga para { platform === 'Win32' ? 'Windows' : 'Linux' }</p>
        <p style={ {
          marginBottom: '4px',
          fontSize: '25px'
        } }
        >Versión estable</p>
      </a>
      <button type="button" className="btn platforms dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" type="button"
            name="Win32" onClick={ changePlatform }>Windows</button>
        </li>
        <li>
          <button className="dropdown-item" type="button"
            name="Linux" onClick={ changePlatform }>Linux</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonMain;