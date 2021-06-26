import './ExploreContainer.css';
import Iframe from 'react-iframe';
//<iframe class="item" src="https://eodashboard.org/iframe?poi=CN01-N5" width="800px" height="500px" frameBorder="0" scroll="no" style="overflow:hidden"></iframe>

interface ContainerProps {
  name: string;
}

const Tropomi: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <h1> II. Tropospheric Nitrogen Dioxide data from the Copernicus Sentinel-5P sattelite. </h1>
      <br/>
      <Iframe className="item" url="https://eodashboard.org/iframe?poi=W1-N1" width="100%" height="100%"
            styles={{height: "500px", width: "800px", style: "overflow:hidden", frameBorder:"0", scroll: "0"}} />
      <br/>
      <img alt='tropomi_china' src="../assets/icon/china.png" />
      <br/>
      &nbsp;
      <p>Fig.1 The following data above are the collected data from the <a href="https://maps.s5p-pal.com/" target="_blank" rel="noreferrer">Copernicus</a> Sentinel-5P website,
      comparing the day of the COVID-19 pandemic vs. before the pandemic occured.</p>
      <br/>
     </div>
  );
};

export default Tropomi;
