'use strict';

describe('Thermostat', function(){
  var thermostat;
  var degrees;

  beforeEach(function(){
    thermostat = new Thermostat();
    degrees = 5;
  });

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  it('can increase temperature with an up function', function(){
    expect(thermostat.up(degrees)).toEqual(25)
  });

  it('can decrease temperature with a down function', function(){
    expect(thermostat.down(degrees)).toEqual(15)
  });

  it('Thermostat has a minimum temperature of 10 degrees', function(){
    expect( function(){ thermostat.down(11) }).toThrow("Minimum Temperature Reached")
  });

});
