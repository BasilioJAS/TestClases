
function respuestaCorrecta(id)
{
    switch (id)
    {
        case 1:
            return "los vikingos";
            break;
        case 2:
            return "lisboa";
            break;
    }
    throw "error, id de respuesta erroneo";
}

function createHtmlRespuestas(respuesta, id)
{
    if(respuesta === respuestaCorrecta(id))
    {
        //armo la pagina correcta
        var html        = new cTagHTML();
        var head        = new cTagHEAD();
        var headTitle   = new cTagTITLE("respuestas");
        var headMeta    = new cTagMETA(cTagMETA.CHARSET, cTagMETA.UTF_8);
        var body        = new cTagBODY();
        var t3          = new cTagT(3,"La respuesta '"+respuesta+"' es correcta!");
        var br          = new cTagBR();
        var aHref       = new cTagA("Back","./preguntas");
        body.addChild(t3);
        body.addChild(br);
        body.addChild(aHref);
        head.addChild(headTitle);
        head.addChild(headMeta);
        html.addChild(head);
        html.addChild(body);

        return  "<!DOCTYPE html>\n" + html.createHtml();
    }
    else
    {
        var html        = new cTagHTML();
        var head        = new cTagHEAD();
        var headTitle   = new cTagTITLE("respuestas");
        var headMeta    = new cTagMETA(cTagMETA.CHARSET, cTagMETA.UTF_8);
        var body        = new cTagBODY();
        var t3          = new cTagT(3,"La respuesta correcta era = '"+respuestaCorrecta(id)+"'");
        var br          = new cTagBR();
        var aHref       = new cTagA("Back","./preguntas");
        body.addChild(t3);
        body.addChild(br);
        body.addChild(aHref);
        head.addChild(headTitle);
        head.addChild(headMeta);
        html.addChild(head);
        html.addChild(body);
        return  "<!DOCTYPE html>\n" + html.createHtml();
    }
}


function createHtmlPreguntas() {

    var html                    = new cTagHTML();
    var head                    = new cTagHEAD();
    var headTitle               = new cTagTITLE( "EL TITULO DE LA PAGINA");
    var headMeta                = new cTagMETA( cTagMETA.CHARSET, cTagMETA.UTF_8);
    var body                    = new cTagBODY();
    var bodyForm_1              = new cTagFORM( cTagFORM.GET, "/preguntas");
    var bodyForm_2              = new cTagFORM( cTagFORM.GET, "/preguntas");
    var bodyFormInputText_1     = new cTagINPUT_TEXT( "respuesta", "escriba su respuesta");
    var bodyFormInputHidden_1   = new cTagINPUT_HIDDEN( "id", 1);
    var bodyFormInputSubmit_1   = new cTagINPUT_SUBMIT( "contestar");
    var bodyFormT3_1            = new cTagT( 3,"quien descubrio america");
    var bodyFormInputText_2     = new cTagINPUT_TEXT( "respuesta", "escriba su respuesta");
    var bodyFormInputHidden_2   = new cTagINPUT_HIDDEN( "id", 2);
    var bodyFormInputSubmit_2   = new cTagINPUT_SUBMIT( "contestar");
    var bodyFormT3_2            = new cTagT( 3, "capital de portugal");


    bodyForm_1.addChild(bodyFormT3_1);
    bodyForm_1.addChild(bodyFormInputText_1);
    bodyForm_1.addChild(bodyFormInputHidden_1);
    bodyForm_1.addChild(bodyFormInputSubmit_1);
    bodyForm_2.addChild(bodyFormT3_2);
    bodyForm_2.addChild(bodyFormInputText_2);
    bodyForm_2.addChild(bodyFormInputHidden_2);
    bodyForm_2.addChild(bodyFormInputSubmit_2);
    body.addChild(bodyForm_1);
    body.addChild(bodyForm_2);
    head.addChild(headTitle);
    head.addChild(headMeta);
    html.addChild(head);
    html.addChild(body);

    return "<!DOCTYPE html>\n" + html.createHtml();
}



console.log(createHtmlPreguntas());
console.log(createHtmlRespuestas("los vikingos", 1));
console.log(createHtmlRespuestas("colon", 1));
console.log(createHtmlRespuestas("lisboa", 2));
console.log(createHtmlRespuestas("pepe", 1));

//document.write(createHtmlRespuestas("lisboa", 2));


