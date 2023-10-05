"use client"

import Chats from "@/components/Chats"
import Input from "@/components/Input"
import Responses from "@/components/Responses"
import ContenedorVentajas from "@/components/ContenedorVentajas";
import "../styles/estilos.css";
import Opciones from "@/components/Opciones";
import { useEffect } from "react";
import Versiones from "@/components/Versiones";

function page() {

      useEffect(() => {

            import('../js/app.js').then((module) => {

                  
            });

            // const resp = await fetch("/api")

            // const res = await resp.json();

            // console.log(res);

      }, []);

      return (

            <main id="main">

                  <aside id="chats">

                        <Chats />

                  </aside>

                  <section id="preguntas">

                        {/* Contenedor de versiones de chargpt*/}
                        <div className="versiones">

                              <Versiones />

                        </div>


                        <div id="contenedor-ventanas">

                              <ContenedorVentajas />

                        </div>

                        <div id="seccion-respuestas">

                              <Responses/>

                        </div>

                        <div id="footer">

                              <div id="opciones-contenedor" className="remove">

                                    <Opciones />

                              </div>


                              <div id="input-contenedor">

                                    <Input />

                              </div>

                        </div>

                  </section>

            </main>

      )
}

export default page