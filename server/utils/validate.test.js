const expect = require('expect');
const {isRealString} = require('./validate');

describe('validate',()=>{
  it('should reject non-string values',()=>{
    var res = isRealString(23);
    expect(res).toBe(false);
  });
  it('should reject string with only spaces',()=>{
    var res = isRealString('   ');
    expect(res).toBe(false);
  });
  it('should allow string with non-spaces characters',()=>{
    var res = isRealString('sdss');
    expect(res).toBe(true);
  });
})
