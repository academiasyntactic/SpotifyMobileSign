const boton = $("#boton");
const contenedor = $(".contenedor");
const email = $("#email")
const btnInicio = $("#btnInicio")
const emailUsuario = "usuario@gmail.com" 
const verContra = $(".verContra")
const password = $("#password")

verContra.mousedown(
    function(){
        password.attr("type", "text")
    }
)
verContra.mouseup(
    function(){
        password.attr("type", "password")
    }
)

btnInicio.click(
    function(){
        if(email.val() == emailUsuario && password.val() == "123456" ){
            alert("El usuario es valido!")
        }else if(email.val() == ""){
            alert("Debes ingresar un email")
        }
        else if(password.val() == ""){
            alert("La contraseña no puede estar vacia")
        }
        else{
            alert("El usuario es invalido")
        }
    }
)
