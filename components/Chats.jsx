import Image from "next/image"
import "../styles/estilos.css";
import img from "../img/image.jpg";

function Chats() {

  return (

    <div>

      <div id="botones">

        <div className="boton" id="nueva-conversacion">+ New chat</div>

        <div className="boton">

          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" stroke-linejoin="round" className="icon-sm" height="1em"
            width="1em" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>

        </div>
      </div>


      <div className="conversaciones">


      </div>

      <div id="perfil">

        <div className="perfil-usuario">+ Upgrade to Plus <span>NEW</span></div>

        <div className="perfil-usuario">

          <image src={img} alt="usuario" />

            <div>

              <p>Christopher Moreno ...</p>

            </div>
            
        </div>

      </div>

    </div>

  )
}

export default Chats