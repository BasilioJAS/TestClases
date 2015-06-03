/**
 * Created by zukutruleSSD on 03/06/2015.
 */
"use strict";

document.write("<script type='text/javascript' src='Tags/cTagA.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagBODY.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagBR.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagFORM.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagHEAD.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagHTML.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagMETA.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagT.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagTITLE.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagINPUT_TEXT.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagINPUT_HIDDEN.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagINPUT_SUBMIT.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagA.js'></script>");
document.write("<script type='text/javascript' src='Tags/cTagBR.js'></script>");


var cTag = function(tagName, close, inOneLine) {
    this.close = close || false;
    this.inOneLine = inOneLine || false;
    this.tagName = tagName;
    this.childrens = [];
    this.prop = {};
    this.value = "";
}

cTag.prototype.createHtml = function (tabPos)
{
    var tabPosition = tabPos || 0;
    var htmlText = "";
    htmlText += this.addTabs(tabPosition);
    htmlText += "<" + this.tagName;
    for (var name in this.prop) {
        htmlText += " " + name + "='" + this.prop[name] + "'";
    }
    if (this.close) {
        htmlText += "/>";
        htmlText += this.endLine();
    }
    else {
        htmlText += ">";
        if (this.inOneLine)
        {
            if (this.value) {
                htmlText += this.value;
            }
            for (var children in this.childrens) {
                htmlText += this.childrens[children].createHtml(tabPosition + 1);
            }
            htmlText += "</" + this.tagName + ">";
            htmlText += this.endLine();

        }
        else
        {
            htmlText += this.endLine();
            if (this.value) {
                htmlText += this.addTabs(tabPosition + 1);
                htmlText += this.value;
                htmlText += this.endLine();
            }
            for (var children in this.childrens) {
                htmlText += this.childrens[children].createHtml(tabPosition + 1);
            }
            htmlText += this.addTabs(tabPosition);
            htmlText += "</" + this.tagName + ">";
            htmlText += this.endLine();
        }
    }
    return htmlText;
};

cTag.prototype.addChild = function (children) {
    this.childrens.push(children);
};

cTag.prototype.addValue = function (value) {
    this.value = value;
};

cTag.prototype.addProperty = function (name, value) {
    this.prop[name] = value;
};

cTag.prototype.addTabs = function (count) {
    var str = "";
    for (var i = 0; i < count; i++) {
        str += "\t";
    }
    return str;
};

cTag.prototype.endLine = function() {
    return "\n";
};
