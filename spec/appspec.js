'use strict';

describe('multiplicatorTest', function(){

  var multiplicatorInstant = new multiplicator();

  it('should multiply two no. together', function(){
    expect(multiplicatorInstant.multiply(5,5)).toBe(25);
  });

  it('should return 0', function(){
    expect(multiplicatorInstant.multiply(3,0)).toBe(0);
  });

});


describe('dividerTest', function(){
  it('should return the the quotient', function(){
    expect(divider(9,3)).toBe(3);
  })
});
