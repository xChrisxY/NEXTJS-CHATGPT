const send = document.querySelector(".icon-container");
const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const conversacionNombre = document.querySelector(".conversaciones");
const parrafos = output.getElementsByTagName('p');
const footer = document.querySelector('#footer');
const seccionRespuestas = document.querySelector("#seccion-respuestas");
const versiones = document.querySelector(".versiones");

const cambiarChatBtn = document.querySelector('#nueva-conversacion');
let conversacionLista = [];
let listaDeObjetos = [];
let aplicacionIniciada = false;
let crearTituloBoolean = false;
let instanciaCreada = false;

function iniciarApp() {

      if (!aplicacionIniciada) {

            const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;

            localStorage.setItem('conversacion', numeroAleatorio);

            aplicacionIniciada = true;
      }

}


send.addEventListener('click', sendPrompt);
cambiarChatBtn.addEventListener('click', changeChat);

function sendPrompt(e) {

      e.preventDefault();

      eliminarElementos();

      iniciarApp();

      //ocultamos los botones
      versiones.style.display = "none";

      const request = document.createElement('p');
      request.classList.add('prompt');
      request.innerHTML =  prompt.value
      output.appendChild(request);

      const response = document.createElement('p');

      async function obtenerRespuesta() {

            try {

                  const responses = await getCompletion(prompt.value);
                  const chatResponse = responses.choices[0].message.content;
                  response.innerHTML = chatResponse;

                  output.appendChild(response);

                  const img = document.createElement('img')
                  img.src = ""
                  output.appendChild(img)

                  output.scrollTop = output.scrollHeight;

                  const conversacion = {

                        'user': prompt.value,
                        'chatGPT': chatResponse
                  }

                  if (!instanciaCreada) {

                        console.log("Solo cuando inicias conversación");
                        const obj1 = new Conversacion(localStorage.getItem('conversacion'), [conversacion]);
                        listaDeObjetos = [...listaDeObjetos, obj1];
                        instanciaCreada = true;

                  } else {

                        listaDeObjetos.forEach(chat => {

                              if (chat.id == localStorage.getItem('conversacion')) {

                                    chat.chat.push(conversacion);

                              }

                        });
                  }

                  crearTitulo(prompt.value);
                  seccionRespuestas.style.marginTop = "0px";

            } catch (error) {

                  console.error(error);

            }

      }

      obtenerRespuesta();

}

function eliminarElementos() {

      const eliminarOpciones = document.querySelectorAll(".remove");

      eliminarOpciones.forEach(elemento => {

            elemento.remove();

      });

}

function crearTitulo(mensaje) {

      if (!crearTituloBoolean) {

            const crearConversacion = document.createElement('p');
            crearConversacion.innerHTML = mensaje;
            crearConversacion.setAttribute('id', JSON.parse(localStorage.getItem('conversacion')))

            const añadirSVG = document.createElement('div');
            añadirSVG.innerHTML = `
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" width=20>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            `
            const contenedor = document.createElement('div');
            contenedor.classList.add('contenedor-conversaciones');

            contenedor.appendChild(añadirSVG);
            contenedor.appendChild(crearConversacion);
            contenedor.addEventListener('click', mostrarHistorial);

            conversacionNombre.appendChild(contenedor);

            crearTituloBoolean = true;
      }

}

function changeChat() {

      aplicacionIniciada = false;
      iniciarApp();
      eliminarElementos();    
      crearTituloBoolean = false;
      instanciaCreada = false;
      seccionRespuestas.style.marginTop = "50px";
      limpiarHTML();
      reiniciarEstado();
      //Reiniciamos los botones
      versiones.style.display = "flex";

}


function limpiarHTML() {

      while (output.firstChild) {

            output.removeChild(output.firstChild);

      }

}

function reiniciarEstado() {

      const titulo = document.createElement("h1");
      titulo.classList.add('remove');
      titulo.textContent = "ChatGPT";
      seccionRespuestas.insertBefore(titulo, seccionRespuestas.firstChild);



      const contenedorPadre = document.createElement('div');
      contenedorPadre.classList.add("remove");
      contenedorPadre.id = "opciones-contenedor";

      const contenedorPrincipal = document.createElement('div');
      contenedorPrincipal.id = "opciones";

      const div1 = document.createElement('div');
      div1.classList.add("opciones-chat");
      const p1 = document.createElement('p');
      p1.classList.add("strong");
      p1.textContent = "Show me a code snippet";
      const p2 = document.createElement('p');
      p2.textContent = "of a website's sticky header";
      div1.appendChild(p1);
      div1.appendChild(p2);

      const div2 = document.createElement('div');
      div2.classList.add("opciones-chat");
      const pp1 = document.createElement('p');
      pp1.classList.add("strong");
      pp1.textContent = "Come up with concepts"
      const pp2 = document.createElement('p');
      pp2.textContent = "for a retro-style arcade game";
      div2.appendChild(pp1);
      div2.appendChild(pp2);

      const div3 = document.createElement('div');
      div3.classList.add("opciones-chat");
      const ppp1 = document.createElement('p');
      ppp1.classList.add("strong");
      ppp1.textContent = "Brainstorm names";
      const ppp2 = document.createElement('p');
      ppp2.textContent = "for a non-alcoholic cocktail with Coke and pomegranas";
      div3.appendChild(ppp1);
      div3.appendChild(ppp2);

      const div4 = document.createElement('div');
      div4.classList.add("opciones-chat");
      const p1p = document.createElement('p');
      p1p.classList.add("strong");
      p1p.textContent = "Write a Python Script"
      const p2p = document.createElement('p');
      p2p.textContent = "to automate sending daily email reports";
      div4.appendChild(p1p);
      div4.appendChild(p2p);

      contenedorPrincipal.appendChild(div1);
      contenedorPrincipal.appendChild(div2);
      contenedorPrincipal.appendChild(div3);
      contenedorPrincipal.appendChild(div4);

      contenedorPadre.appendChild(contenedorPrincipal);

      footer.insertBefore(contenedorPadre, footer.firstChild);

}

function mostrarHistorial(e) {

      listaDeObjetos.forEach(chat => {

            if (e.target.id == chat.id) {

                  const arreglo = chat.chat;
                  limpiarHTML();

                  for (let i = 0; i < arreglo.length; i++) {

                        const request = document.createElement('p');
                        request.classList.add('prompt');
                        request.innerHTML = arreglo[i].user;
                        output.appendChild(request);

                        const response = document.createElement('p');
                        response.innerHTML = arreglo[i].chatGPT;
                        output.appendChild(response);

                  }

                  conversacionNombre.scrollTop = conversacionNombre.scrollHeight;
            }

      });

}


// Consumo de la API
const API_KEY = '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';

async function getCompletion(prompt) {

      const res = await fetch('https://api.openai.com/v1/chat/completions', {

            method: 'POST',

            headers: {

                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + API_KEY

            },

            body: JSON.stringify({

                  "model": "gpt-3.5-turbo",
                  messages: [{ "role": "user", "content": prompt }],
                  // max_tokens: 10,
                  // temperature: 0.9,
            })

      })

      const data = await res.json();

      return data;

}


class Conversacion {

      constructor(id, chat) {

            this.id = id;
            this.chat = chat;

      }

}