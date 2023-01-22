export const getMoreInfo = (item, setCurrentRowInfo, loaderIsActive, setLoaderIsActive) => {
  const loader = document.getElementById('loader');
  const currenUser = document.getElementById(`${item.company.name}`);

  if (currenUser.classList.contains('hidden-row')) {
    loader.classList.remove('hide');
  }
  setTimeout(()=>{
    if(!loaderIsActive){
      loader.classList.add('hide');
    }
  },900)
  setCurrentRowInfo(item);
  
  setTimeout(() => {
    const currenUser = document.getElementById(`${item.company.name}`);
    currenUser.classList.toggle('hidden-row');

    const mapa = new Image();
    const key = 'v6j9POSOH8RG5kvQDFgSGoddDxMqEy1i'

    mapa.src = `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${item.address.geo.lat},${item.address.geo.lng}&size=400,300&zoom=2`
     
    currenUser.innerHTML = `
    <td></td>
    <td id='map' colSpan='4'></td>
        <td >
        <p>city: ${item.address.city}</p>
        <p>street: ${item.address.street}</p>
        <p>suite: ${item.address.suite}</p>
        <p>zipcode: ${item.address.zipcode}</p>
        </td>
        <td colSpan='2'></td>
        `
    const container = document.getElementById('map');

    container.append(mapa)
    }, 50);

  }
