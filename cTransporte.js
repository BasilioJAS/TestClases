/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";

var cTransporte = function(ruedas,motor) {
    this.ruedas = new Number(ruedas);
    this.motor = new String(motor);
};



cTransporte.prototype.prender = function ()
{
    console.log("se prendio el motor del tipo :" + this.motor);
};


