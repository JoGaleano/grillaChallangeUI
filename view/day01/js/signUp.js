let container = document.querySelector('#containerSignUp');

let divFormulario = document.createElement('div');
divFormulario.classList.add('containerForm');
container.appendChild(divFormulario);

let titulo = document.createElement('h1');
titulo.textContent = "Welcome to Habitat!";
titulo.classList.add('title');
divFormulario.appendChild(titulo);

let divIcon = document.createElement('div');
divIcon.classList.add('divIcon');
divFormulario.appendChild(divIcon);
divIcon.innerHTML =
    `<a href='#'><i class="fa-brands fa-google"></i></a>
    <a href='#'><i class="fa-brands fa-twitter"></i></a>
    <a href='#'><i class="fa-brands fa-facebook-f"></i></a>`;

let containerOr = document.createElement('div');
containerOr.classList.add('containerOr');
divFormulario.appendChild(containerOr);
containerOr.innerHTML = ` <hr> <span>   or   </span><hr>`;


let containerInput = document.createElement('div');
containerInput.classList.add('containerInput');
containerInput.innerHTML = 
    `<input type ='text' placeholder="Name">
    <input type ='email' placeholder="Email">
    <input type ='password' placeholder="Password">
    <div class ="check">
    <input type = 'checkbox' class ='checkbox'>
    <p class="terminos"> I agree to terms and conditions.</p>
    </div>
    <button class="btn-login btn"><a href='#'>Sign Up</a></button>
    <a href='../index.html' class="SignIn">Login</a>`;
divFormulario.appendChild(containerInput);

// PORTADA
let imagePortada = document.createElement('div');
imagePortada.classList.add('containerImage');
container.appendChild(imagePortada);