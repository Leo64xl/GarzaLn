import React from 'react'
import "./Gig.scss"
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">GarzaLance Diseño Web</span>
          <h1>Yo creare el mejor diseño UX para tu pagina web</h1>
          <div className="user">
            <img
              className="pp"
              src="/img/isra.jpg"
              alt=""
            />
            <span>Jose Martinez</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
        
          <h2>Sobre este servicio</h2>
          <p>
          Con nuestro Paquete de Diseño Web Premium, no solo obtendrá un sitio web visualmente impresionante, sino también una plataforma en línea optimizada para el éxito de su negocio. Invierta en su presencia digital con confianza y deje que nuestros expertos diseñadores web impulsen su marca al siguiente nivel.
          </p>
          <div className="seller">
            <h2>Sobre este Vendedor</h2>
            <div className="user">
              <img
                src="/img/isra.jpg"
                alt=""
              />
              <div className="info">
                <span>Jose Martinez</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Reportar</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Desde</span>
                  <span className="desc">Mexico</span>
                </div>
                <div className="item">
                  <span className="title">Miembro desde</span>
                  <span className="desc">Mayo 2024</span>
                </div>
                <div className="item">
                  <span className="title">Tiempo de respuesta</span>
                  <span className="desc">4 horas</span>
                </div>
                <div className="item">
                  <span className="title">Ultimo pedido</span>
                  <span className="desc">Hace 1 dia</span>
                </div>
                <div className="item">
                  <span className="title">Idioma</span>
                  <span className="desc">Español</span>
                </div>
              </div>
              <hr />
              <p>
              Soy Jose, un apasionado diseñador web de 32 años. Desde muy joven sentí una gran atracción por el arte, el diseño y la tecnología. Recuerdo pasar horas frente a la computadora explorando páginas web y maravillándome con los diseños cautivadores.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reseñas</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sergio Perez</span>
                  <div className="country">
                    <img
                      src="/img/mexico.png"
                      alt=""
                    />
                    <span>Mexico</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              esto cuenta como experiencia laboral para el currículum?
              </p>
              <div className="helpful">
                <span>Te Ayudo?</span>
                <img src="/img/like.png" alt="" />
                <span>Si</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Alicia Acosta</span>
                  <div className="country">
                    <img
                      src="/img/mexico.png"
                      alt=""
                    />
                    <span>Mexico</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              si te digo que no me envicie mal con este juego, te miento. Hasta en mi casa me dijeron que ya tengo un laburo xd. 1000/10
              </p>
              <div className="helpful">
                <span>Te Ayudo?</span>
                <img src="/img/like.png" alt="" />
                <span>Si</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Hector Fernandez</span>
                  <div className="country">
                    <img
                      src="/img/mexico.png"
                      alt=""
                    />
                    <span>Mexico</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Tengo 67 años de edad y me encantan los simuladores de ciudades, tenia simcity con todas sus actualizaciones ( aun lo extraño ) pero encontre en Cities skyline un juego dinamico , buenos graficos , actualizaciones que le aportan novedades al juego . Y en Steam una comunidad muy amplia de personas que dia a dia aportan mods y asset para enriquecer la experiencia de jugar .
              </p>
              <div className="helpful">
                <span>Ayudo?</span>
                <img src="/img/like.png" alt="" />
                <span>Si</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Diseño basico de pagina</h3>
            <h2>MXN$ 199</h2>
          </div>
          <p>
            Yo creare el diseño web unico para tu pagina, basado en la descripcion que tu me proporciones
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>Entrega en 2 dias</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Reseñas</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Colorimetria perfecta</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Estilo minimalista</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Componentes funcionales</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Diseño adicional</span>
            </div>
          </div>
          <Link to="/Mensajeria">
          <button>Contactame</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gig;