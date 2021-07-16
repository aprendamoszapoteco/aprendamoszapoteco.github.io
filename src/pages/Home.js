import React, { Suspense } from 'react';

import Presentation from '../components/views/Presentation';
import CardInformation from '../components/cards/CardInformation';

const OtherDownloads = React.lazy(() => import('../components/views/OtherDownloads'));
const Support = React.lazy(() => import('../components/views/Support'));

import SpinnerLoading from '../components/commons/SpinnerLoading';
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
              altImage={ obj.title }
              imageRight={ obj.imageRight }
            >
              { obj.description }
            </CardInformation>
          )
        }
      </div>
      <Suspense fallback={ <SpinnerLoading /> }>
        <OtherDownloads />
        <Support />
      </Suspense>
    </>
  );
};

export default Home;