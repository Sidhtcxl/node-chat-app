const expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');
describe('generateMessage',()=>{
  it('should generate correct Message object',() =>{
    var res = generateMessage('siddharth','ka be');
    expect(res.from).toBe('siddharth');
    expect(res.text).toBe('ka be');
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from: 'siddharth',text: 'ka be'});
  });
});

describe('generateLocationMessage',()=>{
  it('should return the correct object',()=>{
    var res = generateLocationMessage('Siddharth',234,234);
    expect(res.from).toBe('Siddharth');
    expect(res.url).toBe('https://www.google.com/maps?q=234,234');
    expect(res.createdAt).toBeA('number');
  });
});
