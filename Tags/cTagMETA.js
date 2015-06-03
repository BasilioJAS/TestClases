/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagMETA = function(name, value)
{
    cTag.call(this,"meta",true);
    this.addProperty(name,value);
};
cTagMETA.prototype = Object.create(cTag.prototype);

cTagMETA.CHARSET = "charset";
cTagMETA.UTF_8= "UTF-8";

