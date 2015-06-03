/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagINPUT_SUBMIT = function(value)
{
    cTag.call(this,"input", true);
    this.addProperty("type", "submit");
    this.addProperty("value", value);
};
cTagINPUT_SUBMIT.prototype = Object.create(cTag.prototype);



