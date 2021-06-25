import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <h1> I. The comparison of graph's using the Activity (car/container) data. </h1>
      <br/>
      <img alt='beijing_data' src="../assets/icon/beijingplot.png" />
      <img alt='nagoya_data' src="../assets/icon/nagoyaplot.png" />
      <img alt='singapore_data' src="../assets/icon/singaporeplot.png" />
      <br/>
      &nbsp;
      <p>Fig.1 The following data above are the collected data from <a href="https://eodashboard.org/" target="_blank"> EO Dashboard </a>
      and I have coded these results using ggplot in <a href="https://www.rstudio.com/" target="_blank">R studio </a> so I can be able to compare the three chart lines into a single chart.</p>
      <br/>
      <img alt='singapore_data' src="../assets/icon/allcities_plot_v2.png" />
      <p>Fig.2 Above is the output of the three activity (car/cargo) chart's displayed in Fig.1 for comparison. <br/><br/>
      Using ggplot, displaying multiple data from three different dataset's in R.
      We can observe that there are broken lines on the data entry of Nagoya and Singapore. This is not an error, this is
      simply the constraints on how the Earth Observing Dashboard has still less data inside its database.</p>
     </div>
  );
};

export default ExploreContainer;
