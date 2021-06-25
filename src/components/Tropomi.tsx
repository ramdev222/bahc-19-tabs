import './Tropomi.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <br/>&nbsp;
      <h1> II. Tropospheric Nitrogen Dioxide data from the Copernicus Sentinel-5P sattelite. </h1>
      <br/>
      <img alt='tropomi_china' src="../assets/icon/china.png" />
      <br/>
      &nbsp;
      <p>Fig.1 The following data above are the collected data from the <a href="https://maps.s5p-pal.com/" target="_blank">Copernicus</a> Sentinel-5P website,
      comparing the day of the COVID-19 pandemic vs. before the pandemic occured.</p>
     </div>
  );
};

export default ExploreContainer;
