class Users{
  constructor(){
    this.users = [];
  }
  addUser(id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    var removedUser;
    this.users = this.users.filter((user)=> {
      if(user.id === id){
        removedUser = user;
      }
      return user.id !== id;
    });
    return removedUser;
  }
  getUser(id){
    var user = this.users.filter((user)=>user.id === id);
    return user[0];
  }
  getUserList(room){
    var users = this.users.filter((user)=> user.room === room);
    var namesArray = users.map((user)=> user.name);
    return namesArray;
  }
}
module.exports = {Users};
