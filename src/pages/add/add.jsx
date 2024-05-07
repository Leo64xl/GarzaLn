import React from 'react'
import { Link } from "react-router-dom";
import "./add.scss"


const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Publica un nuevo servicio</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              placeholder="ejemplo. Haré algo en lo que soy muy bueno"
            />
            <label htmlFor="">Categoria</label>
            <select name="cats" id="cats">
              <option value="design">Diseño</option>
              <option value="web">Desarrollo Web</option>
              <option value="animation">Animacion</option>
              <option value="music">Musica</option>
            </select>
            <label htmlFor="">Miniatura</label>
            <input type="file" />
            <label htmlFor="">Agrega fotos de tu servicio</label>
            <input type="file" multiple />
            <label htmlFor="">Breve descripcion para tu miniatura</label>
            <textarea name="" id="" placeholder="Descripciones breves para presentar su servicio a los clientes." cols="0" rows="16"></textarea>
            <Link className='link' to="/myGigs">
            <button>Publicar</button>
            </Link>
          </div>
          <div className="details">
            <label htmlFor="">Cual es el nombre de tu servicio?</label>
            <input type="text" placeholder="ejemplo: GarzaLance" />
            <label htmlFor="">Descripcion de tu servicio</label>
            <textarea name="" id="" placeholder="Breve descripcion de tu servicio o producto" cols="30" rows="10"></textarea>
            <label htmlFor="">Tiempo de entrega (ejemplo 3 dias)</label>
            <input type="number" />
            <label htmlFor="">Cuantas reseñas quieres que se muestren en tu publicacion?</label>
            <input type="number" />
            <label htmlFor="">Cuales son las caracteristicas de tu servicio?</label>
            <input type="text" placeholder="e.g. diseño de pagina" />
            <input type="text" placeholder="e.g. subir archivos" />
            <input type="text" placeholder="e.g. configura tu dominio" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Precio apartir de</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;