/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";


var cTagTITLE = function(text)
{
    cTag.call(this,"title", false, true);
    this.addValue(text);
};
cTagTITLE.prototype = Object.create(cTag.prototype);
