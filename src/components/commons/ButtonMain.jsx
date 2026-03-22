import '../../styles/styleButtonMain.css';
import { otherDownloads } from '../../data/otherDownloads';

const getInitialPlatform = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  // Detectar dispositivos móviles (Android, iOS)
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    return 'mobile';
  }
  
  if (userAgent.includes('win')) {
    return 'windows';
  }
  if (userAgent.includes('mac')) {
    return 'apple'; 
  }
  if (userAgent.includes('linux')) {
    return 'linux';
  }
  
  return 'windows'; // Plataforma por defecto
};

const getPlatformIconClassName = (platformId) => {
  switch (platformId) {
    case 'windows':
      return 'bi bi-windows';
    case 'apple':
      return 'bi bi-apple';
    case 'linux':
      // Como indicaste que ya lo tienes instalado con pi-tux
      return 'pi-tux';
    default:
      return 'bi bi-download';
  }
};

const ButtonMain = () => {
  const platformId = getInitialPlatform();
  const platformData = otherDownloads.find(d => d.nameToImage === platformId);

  if (!platformData) {
    return null;
  }

  const iconClass = getPlatformIconClassName(platformId);

  return (
    <div className="d-flex justify-content-center mt-3 mb-2 flex-wrap gap-4">
      {platformData.operatingSystem.map((osValue, index) => {
        // Obtenemos el link actual usando la misma posición / índice que el OS
        const link = platformData.dataDownload.current.links[index];
        
        // Ajustar el nombre de la plataforma base a mostrar ("Windows", "Mac", "Linux")
        let platformNameDisplay = 'Windows';
        if (platformId === 'apple') platformNameDisplay = 'Mac';
        if (platformId === 'linux') platformNameDisplay = 'Linux';
        
        let buttonText = `Descarga para ${platformNameDisplay}`;
        
        // Agregar sufijo si es linux para diferenciar paquetes, por ejemplo "(.deb)"
        if (platformId === 'linux') {
          buttonText += `(${osValue})`;
        }

        return (
          <a key={index} role="button" className="btn button d-flex align-items-center px-4 py-2"
            href={ link } target="_blank"
            rel="noreferrer"
            style={{ borderRadius: '8px', textDecoration: 'none' }}
          >
            <i className={`${iconClass} me-3`} style={{ fontSize: '2.5rem', display: 'flex' }}></i>
            <div className="text-center">
              <p style={ {
                marginBottom: '0',
                fontSize: '18px',
                fontWeight: 'bold'
              } }
              >{buttonText}</p>
              <p style={ {
                marginBottom: '0',
                fontSize: '14px',
                opacity: 0.9
              } }
              >Versión estable</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ButtonMain;