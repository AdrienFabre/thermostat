'use strict';

const minimumTemperature = 10;
const maximumTemperatureLow = 25;
const maximumTemperatureHigh = 32;


function Thermostat(){
  this._temperature = 20;
  this._mode = "ON";
};

Thermostat.prototype.temperature = function(){
  return this._temperature
};

Thermostat.prototype.reset = function(){
  this._temperature = 20
  return this._temperature
};

Thermostat.prototype.powerSavingMode = function(){
  return this._mode
};

Thermostat.prototype.up = function(degrees){
  var newTemp = this._temperature + degrees;
  if (newTemp > maximumTemperatureLow) {
    throw "Maximum Temperature Reached";
  } else if  (newTemp > maximumTemperatureHigh) {
    throw "Maximum Temperature Reached";
  } else {
    return this._temperature += degrees;
  };
};

Thermostat.prototype.down = function(degrees){
  var newTemp = this._temperature - degrees;
  if (newTemp <= minimumTemperature) {
    throw "Minimum Temperature Reached";
  } else {
    return this._temperature -= degrees;
  };
};

Thermostat.prototype.powerSavingModeSwitch = function(){
  if (this._mode === "ON") {
    return this._mode = "OFF"
  } else {
    return this._mode = "ON"
  };
};
