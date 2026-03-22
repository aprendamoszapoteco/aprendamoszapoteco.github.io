import styled from 'styled-components';
import { otherDownloads } from '../data/otherDownloads';

const OtherVersions = () => {
  const previousVersions = [];

  otherDownloads.forEach(downloadObj => {
    const dates = Object.keys(downloadObj.dataDownload).filter(key => key !== 'current');
    
    dates.forEach(date => {
      previousVersions.push({
        versionTitle: downloadObj.version || `Versión de ${downloadObj.nameToImage}`,
        description: downloadObj.dataDownload[date].description || `Versión oficial para ${downloadObj.nameToImage}.`,
        date: date,
        links: downloadObj.dataDownload[date].links,
        operatingSystems: downloadObj.operatingSystem
      });
    });
  });

  // Ordenar por fecha de forma descendente (más recientes primero)
  previousVersions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container py-5" style={{ minHeight: '60vh' }}>
      <h2 className="text-center mb-5" style={{ color: '#3E3E3E', fontWeight: 'bold' }}>
        Otras versiones
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {previousVersions.length > 0 ? (
            previousVersions.map((version, index) => (
              <VersionCard key={index} className="card shadow-sm mb-4">
                <div className="card-body">
                  <h4 className="card-title text-primary">{version.versionTitle}</h4>
                  <h6 className="card-subtitle mb-3 text-muted">Fecha: {version.date}</h6>
                  <p className="card-text">{version.description}</p>
                  <div className="d-flex gap-2 flex-wrap mt-3">
                    {version.links.map((link, idx) => (
                      <a key={idx} href={link} className="btn btn-outline-primary" target="_blank" rel="noreferrer">
                        Descargar {version.operatingSystems[idx] || ''}
                      </a>
                    ))}
                  </div>
                </div>
              </VersionCard>
            ))
          ) : (
            <p className="text-center text-muted">No hay versiones anteriores disponibles en este momento.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const VersionCard = styled.div`
  transition: transform 0.2s;
  border-radius: 10px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default OtherVersions;
