/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagINPUT = function()
{
    cTag.call(this,"input", true);
    this.addProperty()
};
cTagINPUT.prototype = Object.create(cTag.prototype);



this.addProperty("type", "text");
this.addProperty("name", "respuesta");
this.addProperty("value", "escriba su respuesta");
