import Search from './Search'
import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from 'react';

const POINTS = [
  {
    title: "Placemark 1",
    descr: "Some description 1",
    coords: [55.831903, 37.411961]
  },
  {
    title: "Placemark 2",
    descr: "Some description 2",
    coords: [55.763338, 37.565466]
  },
  {
    title: "Placemark 3",
    descr: "Some description 3",
    coords: [55.763338, 37.565466]
  },
  {
    title: "Placemark 4",
    descr: "Some description 4",
    coords: [55.744522, 37.616378]
  },
  {
    title: "Placemark 5",
    descr: "Some description 5",
    coords: [55.780898, 37.642889]
  },
  {
    title: "Placemark 6",
    descr: "Some description 6",
    coords: [55.793559, 37.435983]
  },
  {
    title: "Placemark 7",
    descr: "Some description 7",
    coords: [55.800584, 37.675638]
  },
  {
    title: "Placemark 8",
    descr: "Some description 8",
    coords: [55.716733, 37.589988]
  }
];


export default function Main() {
  // const CurrentUserContext  = React.createContext();
  // const [currentUser, setCurrentUser] = React.useState(37);
  // setTimeout(ez, 5000);
  // function ez() {
  //   setCurrentUser(currentUser + 1)
  //   console.log([`55.75, ${currentUser}.57`])
  // }
// <CurrentUserContext.Provider value={currentUser}></CurrentUserContext.Provider>
// непонятно как сделать всплывающие балоны на реакте)  разбираюьс короч
// можно сделасть с перезагрузкой, но не для того я выбрал реакт)
  return(
    
    <div className="main">
      
      <Search />
      <YMaps>
        <div >
        
          <Map className="map" 
          onLoad={ymaps => console.log(ymaps)}
            defaultState={{
              center: [55.75, 37.57], 
              zoom: 10,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            
            {POINTS.map((point, index) => (
                <Placemark
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                  key={index}
                  geometry={point.coords}
                  properties={{
                    item: index,
                    balloonContentHeader: point.title,
                    balloonContentBody: "Тело элемента",
                    balloonContentFooter:
                        `<input type="button" value="Подробнее.."/>`
                  }}
                  options={{
                    balloonPanelMaxMapArea: Infinity
                  }}
                />
              ))}
  
    
          </Map>

        </div>
      </YMaps>
    </div>
  )
}