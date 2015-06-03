/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagA = function(text, link)
{
    cTag.call(this,"a",false, true);
    this.addProperty("href", link);
    this.addValue(text);
};
cTagA.prototype = Object.create(cTag.prototype);

