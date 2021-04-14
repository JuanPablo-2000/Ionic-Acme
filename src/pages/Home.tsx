import { IonContent, IonRow, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonItem, IonIcon, IonLabel, IonImg, IonSlides, IonSlide, IonCardContent, IonAvatar, IonSearchbar, IonCheckbox } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import auto from '../img/Auto.jpg';
import hombre from '../img/avatar-hombre.jpg';

import React, { useState } from 'react';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [textDisabled, setDisabled] = useState<boolean>(false);
  
  const change  = () => {
    console.log("dfd");
    
    setDisabled(!textDisabled);
  }

   return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonAvatar className="avatar">
            <img src={hombre} />             
          </IonAvatar>
          <p>Juan Pablo</p>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div id="buscador-check">
          <IonSearchbar value={searchText}  disabled={textDisabled} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
            <IonItem>
              Todos
            <IonCheckbox slot="end" color="primary" onIonChange={change}/>
          </IonItem>
        </div>
      
        <IonCard>
          <IonSlides>
              <IonSlide>
                <img id="icono" src={auto} />
              </IonSlide>
          </IonSlides>

          <IonCardHeader id="ocultar">

            <IonCardContent className="centrado"><strong>Placa:</strong> QWE-123  <strong className="correr">Modelo:</strong>2020</IonCardContent>
            <IonCardContent className="centrado"><strong>Procedencia:</strong> Propio <strong className="correr">Marca:</strong> Toyota  </IonCardContent>
            <IonCardContent className="centrado"><strong>Propietario Antiguo:</strong> 1006425730 </IonCardContent>
            <IonCardContent className="centrado"><strong>Fecha de Venta:</strong> 2020/07/10 </IonCardContent>

          </IonCardHeader>

        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default Home;
