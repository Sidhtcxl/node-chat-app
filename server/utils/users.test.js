const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id:'1',
      name:'Mike',
      room:'Node Course'
    },{
      id:'2',
      name:'Laila',
      room:'React Course'
    },{
      id:'3',
      name:'Munni',
      room:'Node Course'
    }]
  });

  it('should add new user',()=>{
    var users = new Users();
    var user = {
      id: '213',
      name: 'Siddharth',
      room: 'The Office Fans'
    };
    var res = users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var res = users.removeUser('1');
    expect(res).toEqual({
      id:'1',
      name:'Mike',
      room:'Node Course'
    });
    expect(users.users.length).toBe(2);
  });
  it('should not remove user',()=>{
    var res = users.removeUser('12');
    expect(users.users.length).toBe(3);
    expect(res).toNotExist();
  });

  it('should find a user',()=>{
    var res = users.getUser('1');
    expect(res).toEqual({
      id:'1',
      name:'Mike',
      room:'Node Course'
    });
  });
  it('should not find user',()=>{
    var res = users.getUser('12');
    expect(res).toNotExist();
  });

  it('should return names for node course',()=>{
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike','Munni']);
  });
  it('should return name for react Course',()=>{
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Laila']);
  });
});
