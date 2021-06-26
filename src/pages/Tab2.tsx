import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tropomi from '../components/Tropomi';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tropospheric Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tropospheric Data</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Tropomi name="Tropomi" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
