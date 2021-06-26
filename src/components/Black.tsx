import './Black.css';
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
        <br/>
        <p>Fig.1 The Nighttime data above is from NASA's  EO Dashboard in view of Beijing light pollution. If you click compare image 
            select the date on the right on 2021-03-01, left on 2020-01-01 you can see a difference in their light pollutions.</p>
            <br/>
        <img alt='tropomi_china' src="../assets/icon/01-01-2020data.png" width="40%" height="50%" style={{marginRight: "1vw"}}/>
        <img alt='tropomi_china' src="../assets/icon/03-01-2021data.png" width="40%" height="50%" />
        <p>Fig.2 The light pollution comparative. You can see on the left image, just before covid-19 struck Wuhan. Beijing 
            was not yet aware, and the activities on their city was still ongoing. On the right image, this is after the 
            pandemic struck world-wide and Beijing is on a lockdown. You can see the difference on light pollutions as less
            infrared pixels are observable. 
        </p>
     </div>
     
     
  );
};

export default ExploreContainer;
