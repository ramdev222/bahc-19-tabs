import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Black from '../components/Black';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
     
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Black Marble Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Black name="Black Marble Data" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
