import React from 'react'
import "./add.scss"

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Añade un nuevo servicio</h1>
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
            <label htmlFor="">Agrega Imagenes</label>
            <input type="file" multiple />
            <label htmlFor="">Descripcion</label>
            <textarea name="" id="" placeholder="Descripciones breves para presentar su servicio a los clientes." cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Nombre del servicio</label>
            <input type="text" placeholder="ejemplo: GarzaLance" />
            <label htmlFor="">Descricion de tu servicio</label>
            <textarea name="" id="" placeholder="Breve descripcion de tu servicio o producto" cols="30" rows="10"></textarea>
            <label htmlFor="">Tiempo de entrega (e.g. 3 dias)</label>
            <input type="number" />
            <label htmlFor="">Numero de reseñas</label>
            <input type="number" />
            <label htmlFor="">Añade Caracteristicas</label>
            <input type="text" placeholder="e.g. diseño de pagina" />
            <input type="text" placeholder="e.g. subir archivos" />
            <input type="text" placeholder="e.g. configura tu dominio" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Precio</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;