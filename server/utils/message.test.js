const expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage',()=>{
  it('should generate correct Message object',() =>{
    var res = generateMessage('siddharth','ka be');
    expect(res.from).toBe('siddharth');
    expect(res.text).toBe('ka be');
    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({from: 'siddharth',text: 'ka be'});
  });
});
