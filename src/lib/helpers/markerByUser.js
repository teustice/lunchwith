import markers from '../seeds/mapSeed';

export default function findMarkerByUser(userId) {
  for(let i=0; i < markers.length; i++){
    if(userId === markers[i].userId {
      return markers[i];
    }
  };
}
