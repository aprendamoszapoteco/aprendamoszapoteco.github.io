import PropTypes from 'prop-types';

import '../../styles/styleButtonOption.css';

const ButtonOption = ({ operatingSystem, suportedVersions, href, isLittle = false }) => {
  return (
    <a
      target="_blank"
      href={ href }
      rel="noreferrer"
      className="button-option btn d-flex flex-wrap flex-column justify-content-center py-2"
      style={ {padding: isLittle ? '0 3rem' : '0 5rem'} }
    >
      <p style={ {fontSize: '1.2rem'} }>
        <i className="bi bi-download"></i><span className="px-3">{ operatingSystem }</span>
      </p>
      <small className="small-letter">{ suportedVersions }</small>
    </a>
  );
};

ButtonOption.propTypes = {
  operatingSystem: PropTypes.string.isRequired,
  suportedVersions: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isLittle: PropTypes.bool
};

export default ButtonOption;