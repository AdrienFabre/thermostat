'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  it('can increase temperature with an up function', function(){
    expect(thermostat.up(5)).toEqual(25)
  });

  it('can decrease temperature with a down function', function(){
    expect(thermostat.down(5)).toEqual(15)
  });

  it('has a minimum temperature of 10 degrees', function(){
    expect( function(){ thermostat.down(11) }).toThrow("Minimum Temperature Reached")
  });

  it('has a maximum temperature of 25 degrees if power saving mode on', function(){
    expect( function(){ thermostat.up(6) }).toThrow("Maximum Temperature Reached")
  });

  it('can turn off the power saving mode', function(){
    thermostat.powerSavingModeSwitch()
    expect(thermostat.powerSavingMode()).toEqual("OFF")
  });

  it('has a maximum temperature of 32 degrees if power saving mode off', function(){
    thermostat.powerSavingModeSwitch()
    expect( function(){ thermostat.up(13) }).toThrow("Maximum Temperature Reached")
  });

  it('can reset the temperature to 20 degrees', function(){
    thermostat.down(4)
    thermostat.reset()
    expect(thermostat.temperature()).toEqual(20)
  });

  it("can ask the thermostat's current energy and return low usage when under 18", function(){
    thermostat.down(4)
    expect(thermostat.energyUsage()).toEqual("Low-usage")
  });

  it("can ask the thermostat's current energy and return low usage when 25 or under", function(){
    expect(thermostat.energyUsage()).toEqual("Medium-usage")
  });

  it("can ask the thermostat's current energy and return low usage when over 25", function(){
    thermostat.powerSavingModeSwitch()
    thermostat.up(6)
    expect(thermostat.energyUsage()).toEqual("High-usage")
  });
});
