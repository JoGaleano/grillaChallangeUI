const container = document.querySelector('#container');

const grillaProyecto = document.createElement('div');  
grillaProyecto.classList.add('grillaProyecto');
const divGrilla01 = document.createElement('div');
divGrilla01.classList.add('proyecto01');
divGrilla01.innerHTML = 
            ` <div class='text-info'><h2>Day 01</h2>
                <p>Create a sign up page, modal, form, or app screen related to signing up for something.</p>
                <button><a href="../../day01/index.html">Go</a></button></div>`;

container.appendChild(grillaProyecto);
grillaProyecto.appendChild(divGrilla01);



