'use strict';

describe('Feature Test:', function(){
  var thermostat;
  var degrees;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  it('Thermostat can increase temperature with an up function', function(){
    expect(thermostat.up(5)).toEqual(25)
  });

  it('Thermostat can decrease temperature with a down function', function(){
    expect(thermostat.down(5)).toEqual(15)
  });

  it('Thermostat has a minimum temperature of 10 degrees', function(){
    expect( function(){ thermostat.down(11) }).toThrow("Minimum Temperature Reached")
  });

  it('Thermostat has a maximum temperature of 25 degrees if power saving mode on', function(){
    expect( function(){ thermostat.up(6) }).toThrow("Maximum Temperature Reached")
  });

  it('Thermostat can turn off the power saving mode', function(){
    thermostat.powerSavingModeSwitch()
    expect(thermostat.powerSavingMode()).toEqual("OFF")
  });

  it('Thermostat has a maximum temperature of 32 degrees if power saving mode off', function(){
    thermostat.powerSavingModeSwitch()
    expect( function(){ thermostat.up(13) }).toThrow("Maximum Temperature Reached")
  });

  it('Thermostat reset the temperature to 20 degrees', function(){
    thermostat.down(4)
    thermostat.reset()
    expect(thermostat.temperature()).toEqual(20)
  });
});
