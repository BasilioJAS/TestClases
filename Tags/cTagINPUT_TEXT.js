/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagINPUT_TEXT = function(name, value)
{
    cTag.call(this,"input", true);
    this.addProperty("type", "text");
    this.addProperty("name", name);
    this.addProperty("value", value);

}
cTagINPUT_TEXT.prototype = Object.create(cTag.prototype);



