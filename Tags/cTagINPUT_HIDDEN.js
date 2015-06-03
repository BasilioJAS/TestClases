/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagINPUT_HIDDEN = function(name, value)
{
    cTag.call(this,"input", true);
    this.addProperty("type", "hidden");
    this.addProperty("name", name);
    this.addProperty("value", value);




};
cTagINPUT_HIDDEN.prototype = Object.create(cTag.prototype);



