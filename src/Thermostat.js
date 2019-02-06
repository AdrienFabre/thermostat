'use strict';

function Thermostat(){
  this._temperature = 20;
};

Thermostat.prototype.temperature = function(){
  return this._temperature
};

Thermostat.prototype.up = function(degrees){
  return this._temperature += degrees
};

Thermostat.prototype.down = function(degrees){
  var newTemp = this._temperature - degrees;
  if (newTemp <= 10) {
    throw "Minimum Temperature Reached";
  } else {
    return this._temperature -= degrees;
  };
};
