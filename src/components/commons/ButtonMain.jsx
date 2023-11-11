import { useState } from 'react';
import '../../styles/styleButtonMain.css';
import data from '../../data/buttonMain';

const ButtonMain = () => {
  const temPlatform = navigator.platform === 'Win32' ? 'Win32' : 'LinuxDeb';
  const [platform, setPlatform] = useState(temPlatform);
  const [link, setLink] = useState(data[temPlatform].linkToDownload);

  const changePlatform = (e) => {
    const newPlatform = e.target.name;
    setPlatform(newPlatform);
    setLink(data[newPlatform].linkToDownload);
  };

  return (
    <div className="btn-group">
      <a role="button" className="btn button"
        href={ link } target="_blank"
        rel="noreferrer"
      >
        <p style={ {
          marginBottom: '4px',
          fontSize: '18px',
          fontWeight: 'bold'
        } }
        >Descarga para { data[platform].platform }</p>
        <p style={ {
          marginBottom: '4px',
          fontSize: '16px'
        } }
        >Versión estable</p>
      </a>
      <button type="button" className="btn platforms dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        { Object.keys(data).map((platformId, index) =>
          <li key={ index }>
            <button
              className="dropdown-item"
              type="button"
              name={ platformId }
              onClick={ changePlatform }
            >{ data[platformId].platform }</button>
          </li>)
        }
      </ul>
    </div>
  );
};

export default ButtonMain;