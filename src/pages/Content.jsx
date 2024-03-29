import CardInformation from '../components/cards/CardInformation';
import data from '../data/content';

const Content = () => {
  return (
    <div>{
      data.map((obj, index) =>
        <CardInformation
          key={ index }
          title={ obj.title }
          pathImage={ `content/${obj.image}` }
          altImage={ obj.title }
          imageRight={ obj.imageRight }
        >{ obj.description }</CardInformation>
      )
    }</div>
  );
};

export default Content;