let container = document.querySelector('#container');

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
    `<a href="#"><i class="fa-brands fa-google"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>`;

let containerOr = document.createElement('div');
containerOr.classList.add('containerOr');
divFormulario.appendChild(containerOr);
containerOr.innerHTML = ` <hr> <span>   or   </span><hr>`;


let containerInput = document.createElement('div');
containerInput.classList.add('containerInput');
containerInput.innerHTML = 
    `<input type ='text' placeholder="Name">
    <input type ='password' placeholder="Password">
    <a href='#' class="password"> Forgot password?</a>
    <button class="btn-login btn"><a href='#'>Login</a></button>
    <a href='view/signUp.html' class="SignIn">Sign Up</a>`;
divFormulario.appendChild(containerInput);

// PORTADA
let imagePortada = document.createElement('div');
imagePortada.classList.add('containerImage');
// const image = document.createElement('img');
// image.src = 'assets/david-kovalenko-Spp6xNPcsgc-unsplash.jpg';
container.appendChild(imagePortada);
// imagePortada.appendChild(image);
