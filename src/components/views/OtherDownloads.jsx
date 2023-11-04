import { otherDownloads } from '../../data/otherDownloads';
import ButtonOption from '../commons/ButtonOption';

import '../../styles/styleOtherDownloads.css';

const OtherDownloads = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center py-4" style={ {background: '#F8F8F8'} }>
      { otherDownloads &&
        otherDownloads.map((objectValue, index) =>
          <div key={ index } className="mx-4 my-3">
            <div className="container-img-os m-auto">
              <picture>
                <source
                  srcSet={
                    new URL(`../../img/otherDownloads/${objectValue.nameToImage}.webp`, import.meta.url).href
                  }
                />
                <img
                  src={
                    new URL(`../../img/otherDownloads/${objectValue.nameToImage}.png`, import.meta.url).href
                  }
                  alt={ objectValue.nameToImage }
                />
              </picture>
            </div>
            <div className="button-downloads d-flex flex-wrap justify-content-around">
              { objectValue.operatingSystem &&
                objectValue.operatingSystem.map((value, index) =>
                  <div
                    key={ index }
                    className="m-1"
                  >
                    <ButtonOption
                      operatingSystem={ value }
                      href={ objectValue.linksToDownload[index] }
                      suportedVersions={ objectValue.suportedVersions[index] }
                      isLittle={ objectValue.operatingSystem.length > 1 }
                    />
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </section>
  );
};

export default OtherDownloads;