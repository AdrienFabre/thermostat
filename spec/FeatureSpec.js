'use strict';

describe('Feature Test:', function(){
  var thermostat;
  var degrees;
  beforeEach(function(){
    thermostat = new Thermostat();
    degrees = 5
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  it('can increase temperature with an up function', function(){
    expect(thermostat.up(degrees)).toEqual(25)
  });

});
