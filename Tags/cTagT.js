/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";

/**
 *
 * @param number 1 para t1, 2 para t2 etc...
 */
var cTagT = function(number, text)
{
    var t = "";
    switch (number)
    {
        case 1:t = "t1";break
        case 2:t = "t2";break
        case 3:t = "t3";break
        case 4:t = "t4";break
        case 5:t = "t5";break
    }
    cTag.call(this,t, false, true);
    this.addValue(text);
}
cTagT.prototype = Object.create(cTag.prototype);
