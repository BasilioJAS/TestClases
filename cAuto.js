/**
 * Created by zukutruleSSD on 03/06/2015.
 */
//document.write("<script type='text/javascript' src='cTransporte.js'></script>");






var cAuto = function (marca, modelo)
{
    cTransporte.call(this, 4, "combustion222");
    this.marca = new String(marca);
    this.modelo = new String (modelo);


};
cAuto.prototype = Object.create(cTransporte.prototype);
cAuto.prototype.andar = function(){
    console.log("el auto "+ this.marca + " "+this.modelo + " se puso a andar en sus " + this.ruedas+ " ruedas");
};

