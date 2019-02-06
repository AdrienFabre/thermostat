'use strict';

function Thermostat(){

  this._temperature = 20;
};

Thermostat.prototype.temperature = function(){ return this._temperature };

Thermostat.prototype.up = function(degrees){
  return this._temperature += degrees
};

Thermostat.prototype.down = function(degrees){
  return this._temperature -= degrees
};
