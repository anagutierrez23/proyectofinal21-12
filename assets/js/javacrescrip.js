function encriptar(){
passSistema = "73ana";
msgError="errore password, riprova";
var mensaje=document.getElementById("msg").value;
var password= document.getElementById("pass").value;
//alert(mensaje+"+"+password)
if(passSistema==password){
    
    //alet("contraseña correcta ")}//
    window.location.href = "pag2.html";
}else{

    //alert("error");
    document.getElementById("error").innerHTML=msgError;
}
    



}



function desencriptar(){
    var mensajeCodigo = Document.getElementById("msgCodigo").value;
    var decrypted = atob(mensajeCodigo)
    
    document.getElementById("demo3").innerHTML = decrypted;
    window.location.href = "pag3.html";
    

}