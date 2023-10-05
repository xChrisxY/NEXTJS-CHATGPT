"use client"

import { useState, useEffect } from "react";
import "../styles/estilos.css";

function Input() {
      

      const [promptValue, setPromptValue] = useState("");

      return (

            <>

                  <div className="input">

                        <input type="text" placeholder="Send a message" id="prompt" value={promptValue} onChange={(e) => setPromptValue(e.target.value)} />

                        <div className="icon-container">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 16 16"
                                    fill="none" class="icon-sm m-1 md:m-0">
                                    <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                                          fill="currentColor"></path>
                              </svg>
                        </div>

                  </div>

                  <div className="info-small">

                        <strong style={{ display: "block" }}>Free Research Preview. ChatGPT may produce
                              inaccurate
                              information about people, places,
                              or facts.</strong>
                        <small>ChatGPT August 3 Version</small>
                  </div>

            </>

      )
}



export default Input