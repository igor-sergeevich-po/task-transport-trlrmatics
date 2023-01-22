// import React from 'react';
// import { useContext } from 'react';
// import { UsersContext } from '../hoc/UsersProvider';
// import { v4 as uuid } from 'uuid';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const MoreInfoItem = (e, item, setCurrentRowInfo) => {
//     const {currentRowInfo} = useContext(UsersContext);

//     // const [lat, setLat] = useState("-43.9509");
//     // const [lng, setLng] = useState("-34.4618");
//     const [mapImg, setMapImg] = useState('asdf');
//     const mapa = new Image();
//     const key = 'v6j9POSOH8RG5kvQDFgSGoddDxMqEy1i'
//     useEffect(() => {
//       // mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${lat},${lng}&size=400,300`
//       mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${currentRowInfo.address.geo.lat},${currentRowInfo.address.geo.lng}&size=400,300`
//       setMapImg(mapa)
//     }, [])
//     console.log(mapImg)
// console.log(e.target)
//   return (
//     <React.Fragment>
//       { currentRowInfo && 
//           <tr key={uuid()} className='grow'>
//             <th colSpan={8}>
//             {currentRowInfo.address.street}
//             {currentRowInfo.address.city}
//             {currentRowInfo.name}
//             </th>
//           </tr>}
//     </React.Fragment>
//   )
// }
