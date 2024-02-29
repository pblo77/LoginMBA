/* Eventos */
document.querySelector("#btnRegistrarse").addEventListener("click",registro);
document.querySelector("#btnIniciarSesion").addEventListener("click",login);
window.addEventListener("resize", anchoPagina);


/* Variables a usar */
var formulario = document.querySelector(".formulario");
var formularioLogin = document.querySelector(".formularioLogin");
var formularioRegistro = document.querySelector(".formularioRegistro");
var cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
var cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");


function anchoPagina(){
    if(window.innerWidth > 850){
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegistro.style.display = "block"
    } else{
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegistro.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegistro.style.display = "none";
        formulario.style.left = "0";
    };
};
anchoPagina();

function registro(){
    if(window.innerWidth > 850){
        formularioRegistro.style.display = "block";
        formulario.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegistro.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    }else{
        formularioRegistro.style.display = "block";
        formulario.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegistro.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    };
};

function login(){
    if(window.innerWidth > 850){
        formularioLogin.style.display = "block";
        formulario.style.left = "10px";
        formularioRegistro.style.display = "none";
        cajaTraseraLogin.style.opacity = "0";
        cajaTraseraRegistro.style.opacity = "1";
    }else{
        formularioLogin.style.display = "block";
        formulario.style.left = "0px";
        formularioRegistro.style.display = "none";
        cajaTraseraLogin.style.display = "none";
        cajaTraseraRegistro.style.display = "block";
    };
};



/* -------- GUARDAR DATOS PARA LOGIN ----------- */

/* Evento que guarda todos los datos del registro*/
formularioRegistro.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = Users.find(user => user.correo=== correo);
    if (isUserRegistered) {
        return alert("El usuario ya esta registrado");
    };
    Users.push({nombre:nombre, correo: correo, usuario:usuario,contraseña:contraseña});
    localStorage.setItem("users", JSON.stringify(Users));
    alert("Registro exitoso");
    window.location.href = "index.html";
});

/* Evento que guarda todos los datos del login */
formularioLogin.addEventListener("submit",(e)=>{
    e.preventDefault();
    const usuario = document.getElementById("user").value;
    const contraseña = document.getElementById("password").value;
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = Users.find(user => user.usuario === usuario && user.contraseña === contraseña);
    if (!validUser) {
        return alert ("Usuario y/o contraseñas incorrectos.");
    };
    alert (`Bienvenido`);
    localStorage.setItem("loginSuccess", JSON.stringify(validUser));
    window.location.href = "index.html"
});

/* BOTON DE LOG-OUT (ACTIVAR SOLO CUANDO SE TENGA LISTO EL MAIN) 

const usuario2 =  JSON.parse(localstorage.getItem("loginSuccess")) || false
if(!usuario2){
    window.location.href = "index.html"
};

const logout= document.querySelector("#logout")

logout.addEvenListener("click", ()=>{
    alert ("Hasta Pronto")
    localStorage.removeItem("loginSuccess")
    window.location.href = "index.html"
})

*/
