import Search from './Search'
import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from 'react';

export default function Main() {
  // const CurrentUserContext  = React.createContext();
  // const [currentUser, setCurrentUser] = React.useState(37);
  // setTimeout(ez, 5000);
  // function ez() {
  //   setCurrentUser(currentUser + 1)
  //   console.log([`55.75, ${currentUser}.57`])
  // }
// <CurrentUserContext.Provider value={currentUser}></CurrentUserContext.Provider>
// непонятно как сделать всплывающие балоны на реакте) зря я начал сразу на реакте(
  return(
    
    <div className="main">
      
      <Search />
      <YMaps>
        <div >
        
          <Map className="map"
            defaultState={{
              center: [55.75, 37.57], 
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            
            <Placemark defaultGeometry={[55.75, 37.57]} 
             modules={['geoObject.addon.balloon']}
             properties={{
              balloonContentBody:
                'Человек со стихом',
            }}
             />
             <Placemark defaultGeometry={[55.79, 37.57]} 
             modules={['geoObject.addon.balloon']}
             properties={{
              balloonContentBody:
                'Человек со стихом',
            }}
             />
  
            
          </Map>

        </div>
      </YMaps>
    </div>
  )
}