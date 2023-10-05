function ContenedorVentajas() {

      return (

            <div>

                  <div id="ventanaEmergente" className="ventana" style={{display: "none"}}>

                        <strong>Our fastest model, great for most everyday <br /> tasks</strong>
                        <p><small style={{color: "gray"}}>Available to Free and Plus users</small></p>

                  </div>

                  <div id="ventanaEmergente-2" className="ventana" style={{display: "none"}}>

                        <strong>
                              Our most capable model, great for tasks <br />that require creativity  and <br />
                              advanced
                              reasoning
                        </strong>
                        <p><small style={{color: "gray"}}>Available to Free and Plus users</small></p>
                        <p><small style={{color: "gray"}}>GPT-4 currently has a cap of 25 messages every 3
                              hours</small>
                        </p>

                        <div style={{textAlign: "center"}}>

                              <button>Upgrade to ChatGPT Plus</button>

                        </div>

                  </div>

            </div>
            
      )
}

export default ContenedorVentajas