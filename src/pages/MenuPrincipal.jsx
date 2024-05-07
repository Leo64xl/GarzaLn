import React from 'react'
import appFirebase from '../credenciales';
import { Link, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Featured from '../components/featured/Featured';
import TrustedBy from '../components/trustedBy/TrustedBy';
import Slide from '../components/Slider/Slide';
import {cards} from '../data';
import CatCard from '../components/catCard/CatCard';
import "../Diseños_css/MenuPrincipal.scss"
import ProjectCard from '../components/ProjectCard/ProjectCard'
import {projects} from '../data';

const MenuPrincipal = () => {
  return (
    <div className='menuPrincipal'>
      <Navbar />
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Todo un mundo de talento freelance a tu alcance</h1>
            <div className="title">
              <img src="/img/check.png" alt="" />
              La mejor para cada presupuesto.
            </div>
            <p>
            Encuentre servicios de alta calidad a todos los precios. Sin tarifas por hora, solo precios basados en proyectos.
            </p>
            <div className="title">
              <img src="/img/check.png" alt="" />
              Trabajo de calidad hecho rápidamente.
            </div>
            <p>
            Encuentre el freelancer adecuado para comenzar a trabajar en su proyecto dentro
            minutos.
            </p>
            <div className="title">
              <img src="/img/check.png" alt="" />
              Pagos protegidos, todo el tiempo
            </div>
            <p>
            Sepa siempre lo que todos pagan por adelantado. 
            Su pago no se libera hasta que apruebe el trabajo.
            </p>
            <div className="title">
              <img src="/img/check.png" alt="" />
              Soporte 24/7
            </div>
            <p>
            Nuestro equipo de soporte está disponible las 24 horas del día, en cualquier momento y en cualquier lugar.
            </p>
          </div>
          <div className="item">
            <video  src="/img/video.mp4" controls ></video>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explora el Marketplace</h1>
          <div className="items">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Diseño Grafico y Diseño</span>
          </div>
            <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt=""
            />
            <div className="line"></div>

            <span> Marketing Digital</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Escritura y Traduccion</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Video y Animacion</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Musica y Audio</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Programacion y Tecnologia</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Negocios</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Estilo de vida</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Datos</span>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
              alt=""
            />
            <div className="line"></div>
            <span>Fotografia</span>
          </div>
          </div>
        </div>
      </div>
      <div className="features dark">
      <div className="container">
          <div className="item">
            <h1>
              GarzaLance <i>business</i>
            </h1>
            <h1>
              Soluciones diseñadas para <i>equipos</i>
            </h1>
            <p>
            Actualice a una experiencia seleccionada repleta de herramientas y beneficios,
            dedicado a las empresas
            </p>
            <div className="title">
              <img src="/img/check.png" alt="" />
              Conecta con freelancers con experiencia comprobada
            </div>

            <div className="title">
              <img src="/img/check.png" alt="" />
              Obtenga el talento perfecto de un gerente de éxito del cliente.
            </div>

            <div className="title">
              <img src="/img/check.png" alt="" />
              Gestione el trabajo en equipo y aumente la productividad con un potente espacio de trabajo
            </div>
            <button>Prueba GarzaLance Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default MenuPrincipal