// import React from 'react'
// import { useEffect } from 'react';

// export const Map = ({height, width, center, tileLayer, zoom, apiKey}) => {
//     useEffect(() => {
//         window.L.mapquest.key = apiKey;
//         const map = window.L.mapquest.map('map', {
//             center,
//             layers: window.L.mapquest.tileLayer(tileLayer),
//             zoom
//         });
//         map.addControl(window.L.mapquest.addControl())
//     }, []);
 
//   return (
//     <>
//         <div>Map</div>
//         <div id='map' style={{width: '600px', height: '400px'}}></div>
//     </>
//   )
// }
