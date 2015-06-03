/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagFORM = function(method, action)
{
    cTag.call(this,"form");
    this.addProperty("method", method);
    this.addProperty("action", action);
};
cTagFORM.prototype = Object.create(cTag.prototype);
cTagFORM.GET = "GET";

