'use strict';

describe('Feature Test:', function(){
  var thermostat;
  var degrees;

  beforeEach(function(){
    thermostat = new Thermostat();
    degrees = 5;
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  it('Thermostat can increase temperature with an up function', function(){
    expect(thermostat.up(degrees)).toEqual(25)
  });

  it('Thermostat can decrease temperature with a down function', function(){
    expect(thermostat.down(degrees)).toEqual(15)
  });

  it('Thermostat has a minimum temperature of 10 degrees', function(){
    expect( function(){ thermostat.down(11) }).toThrow("Minimum Temperature Reached")
  });
});
