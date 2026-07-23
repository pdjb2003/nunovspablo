var login = 1;
var pwd = 1;
var dni = 1;

function checkLogin(){
    var controlLogin = document.forms.formulario.clogin;
    var valueLogin = controlLogin.value;
    var re = /^([a-z_0-9])*$/;
    login += 1;
    if (valueLogin.length == 0) return true;
    if ((valueLogin.length < 4) || (valueLogin.length > 8)){
        alert("Deben escribirse entre 4 y 8 caracteres.");
        return false;
    }
    if (re.test(valueLogin)){ return true; }
    else{ 
        alert("No concuerda con el patron especificado.");
        return false;
    }
}

function checkLogin2(){
    var controlLogin = document.forms.formulario.clogin;
    var valueLogin = controlLogin.value;
    var re = /^([a-z_0-9])*$/;
    if (valueLogin.length == 0) return true;
    if ((valueLogin.length < 4) || (valueLogin.length > 8)){
        return false;
    }
    if (re.test(valueLogin)){ return true; }
    else{ 
        return false;
    }
}

function checkPwd(){
    var controlPwd = document.forms.formulario.cpasswd;
    var valuePwd = controlPwd.value;
    var reMayus = /[A-Z]+/;
    var reMinus = /[a-z]+/;
    var reSimbolo = /[\+|\-|\*|\/]/
    var reDigito = /[0-9]/;
    pwd += 1;
    if (valuePwd.length == 0) return true;
    if ((valuePwd.length < 6 ) || (valuePwd.length > 12)){
        alert("Deben escribirse entre 6 y 12 caracteres.");
        return false;
    }
    if (!(reMayus.test(valuePwd))){alert("Debe haber por lo menos una mayuscula."); return false;}
    if (!(reMinus.test(valuePwd))){alert("Debe haber por lo menos una minuscula."); return false;}
    if (!(reSimbolo.test(valuePwd))){alert("Debe contener uno de los simbolos especificados."); return false;}
    if (!(reDigito.test(valuePwd))){alert("Debe contener un digito (0-9)."); return false;}

    return true;
}

function checkPwd2(){
    var controlPwd = document.forms.formulario.cpasswd;
    var valuePwd = controlPwd.value;
    var reMayus = /[A-Z]+/;
    var reMinus = /[a-z]+/;
    var reSimbolo = /[\+|\-|\*|\/]/
    var reDigito = /[0-9]/;
    if (valuePwd.length == 0) {return true; }
    if ((valuePwd.length < 6 ) || (valuePwd.length > 12)){
        return false;
    }
    if (!(reMayus.test(valuePwd))){ return false;}
    if (!(reMinus.test(valuePwd))){return false;}
    if (!(reSimbolo.test(valuePwd))){return false;}
    if (!(reDigito.test(valuePwd))){return false;}

    return true;
}

function checkDNI(){
    var controlDni = document.forms.formulario.cdni;
    var valueDni = controlDni.value;
    var re = /^([0-7]\d{7}[A-Z])*$/;
    dni += 1;
    if (re.test(valueDni)){ return true; }
    else{
        alert("No concuerda con el patron especificado.");
        return false;
    }
}

function checkDNI2(){
    var controlDni = document.forms.formulario.cdni;
    var valueDni = controlDni.value;
    var re = /^([0-7]\d{7}[A-Z])*$/;
    if (re.test(valueDni)){ return true; }
    else{
        return false;
    }
}

function checkAll(check){
    var controlPref = document.getElementsByClassName("preferencias");
    
    for (var i = 0; i < controlPref.length; i++){  /* Recorro lista de elementos con esa clase */
        controlPref[i].checked = check;  /* Si le doy al boton de marcar entra con true, si le doy a desmarcar entra con false */
    }
}

function restablecerForm(){
    document.getElementById("formulario").reset();
}

function infoNav(){
    document.getElementById("escondido").value = navigator.userAgent;
}

function metodoEnvio(metodo){    /* sera GET si entra con true, y POST si entra con false*/
    if (!metodo){
        document.getElementById("formulario").method = "POST";
    }
    else document.getElementById("formulario").method = "GET";
}

function tipoCodificacion(tipo){    /* sera application/x-www-form-urlencoded si entra con true, y multipart/form-data si entra con false*/
    if ((document.getElementById("Get").checked) || (tipo)){
        document.getElementById("formulario").enctype = "application/x-www-form-urlencoded";
    }
    else if ((document.getElementById("Post").checked) && (!tipo)) {
        document.getElementById("formulario").enctype = "multipart/form-data";
    }
}

/*
function encoding(){  
    if ( document.getElementById("formulario").enctype == "application/x-www-form-urlencoded" ){
        document.getElementsByName("cencoding").val() = "urlencoded";
    }
    else if (  document.getElementById("formulario").enctype == "multipart/form-data" ){
        document.getElementsByName("cencoding").val() = "multipart";
    }
}*/

function checkSubmit(){
    if ((login != 1) && (!(checkLogin2()))){
        return false;
    }

    if ((pwd != 1) && (!(checkPwd2()))){
        return false;
    }

    if ((dni != 1) && (!(checkDNI2()))){
        return false;
    }

    else 
        /*encoding();*/
        return true;
}
