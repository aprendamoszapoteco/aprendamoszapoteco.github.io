import React from 'react';

import Presentation from '../components/views/Presentation';
import Support from '../components/views/Support';
import CardInformation from '../components/cards/CardInformation';
import OtherDownloads from '../components/views/OtherDownloads';
import {listHome} from '../data/home';

const Home = () => {
  return (
    <>
      <Presentation />
      <div>
        { listHome &&
          listHome.map((obj, index) =>
            <CardInformation
              key={ index }
              title={ obj.title }
              pathImage={ `home/${obj.image}` }
              imageRight={ obj.imageRight }
            >
              { obj.description }
            </CardInformation>
          )
        }
      </div>
      <OtherDownloads />
      <Support />
    </>
  );
};

export default Home;