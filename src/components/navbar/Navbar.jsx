import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "User",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/MenuPrincipal">
            <span className="text">GarzaLance</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>GarzaLance Business</span>
          <span>Explora</span>
          <Link to="/orders">
          <span>Pedidos</span>
          </Link>
          {!currentUser?.isSeller && <span>Conviertete en Vendedor</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="/img/user.png"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="Gigs" to="/gigs">
                      Servicios
                    </Link>
                    <Link className="MyGigs" to="/myGigs">
                      Mis Servicios
                    </Link>
                    <Link className="Add" to="/add">
                      Publicar un Servicio
                    </Link>
                  </>
                )}
                <Link className="Order" to="/orders">
                  Pedidos
                </Link>
                <Link className="link" to="/Mensajeria">
                  Mensajeria
                </Link>
                <Link className="Inicio" to="/inicio-pantalla-inicial">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Registrate</span>
              <Link className="link" to="/registro-usuario">
                <button>Unete</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Artes Graficas y Diseño
            </Link>
            <Link className="link menuLink" to="/">
              Video y Animacion
            </Link>
            <Link className="link menuLink" to="/">
              Escritura y Traduccion
            </Link>
            <Link className="link menuLink" to="/">
              AI Servicios
            </Link>
            <Link className="link menuLink" to="/">
              Marketing Digital 
            </Link>
            <Link className="link menuLink" to="/">
              Musica y Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programacion y Tecnologia
            </Link>
            <Link className="link menuLink" to="/">
              Negocios
            </Link>
            <Link className="link menuLink" to="/">
              Estilo de Vida
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;