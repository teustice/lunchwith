import users from '../seeds/userSeed';

export default function findUserById(id) {
  for(let i=0; i < users.length; i++){
    if(id === users[i].id) {
      return users[i];
    }
  };
}
