import './Tropomi.css';
import Iframe from 'react-iframe';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <h1> III. Black Marble Nighttime Data, <a href="https://earthdata.nasa.gov/earth-observation-data/near-real-time/download-nrt-data/viirs-nrt" target="_blank" rel="noreferrer">Suomi NPP VIIRS</a>. </h1>
        <br/>
      <Iframe className="item" url="https://eodashboard.org/iframe?poi=CN01-N5" width="100%" height="100%"
            styles={{height: "500px", width: "800px", style: "overflow:hidden", frameBorder:"0", scroll: "0"}} />
     </div>
  );
};

export default ExploreContainer;
