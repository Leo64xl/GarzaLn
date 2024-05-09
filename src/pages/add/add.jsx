import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./add.scss"
import axios from 'axios';
import { set } from 'mongoose';


const Add = () => {

  const [image,setImage]=useState();

  const handleChange=e=>{
    setImage(e.target.files[0])
    console.log(e.target.files[0])
  }
  const [title, setTitle] = useState('')
  const handleChange2=e=>{
     setTitle(e.target.value)
     console.log(e.target.value)
  }
  
 
  const [nameService, setNameService] = useState('')
  

  const handleChange3=e=>{
    setNameService(e.target.value)
    console.log(e.target.value)
  }

  const [descripcion, setDescripcion] = useState('')

  const handleChange4=e=>{
    setDescripcion(e.target.value)
    console.log(e.target.value)
  }


  const [category, setCategory] = useState('')

  const handleChange5=e=>{
    setCategory(e.target.value)
    console.log(e.target.value)
  }

  const [time, setTime] = useState()

  const handleChange6=e=>{
    setTime(e.target.value)
    console.log(e.target.value)
  }
  const [price, setPrice] = useState()

  const handleChange7=e=>{
    setPrice(e.target.value)
    console.log(e.target.value)
  }  
  const [caracteristicas, setCaracteristicas] = useState('')

  const handleChange8=e=>{
    setCaracteristicas(e.target.value)
    console.log(e.target.value)
  }  

  /*const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append('image', image);
    formData.append('title',title);
    formData.append('nameService', nameService);
    formData.append('category',category);
    formData.append('descripcion', descripcion);
    formData.append('time',time);
    formData.append('price', price);
    formData.append('caracteristicas',caracteristicas);

    try {
    const res = await axios.post('/api/images/upload', formData);
    console.log(res);
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
  }*/
  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('image', image);
  formData.append('title', title);
  formData.append('nameService', nameService);
  formData.append('category', category);
  formData.append('descripcion', descripcion);
  formData.append('time', time);
  formData.append('price', price);
  formData.append('caracteristicas', caracteristicas);

  try {
    const res = await axios.post('http://localhost:4000/api/images/upload', formData);
    console.log(res);
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};
  
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
              onChange={handleChange2}
            />
            <label htmlFor="" onChange={handleChange5}>Categoria</label>
            <select name="cats" id="cats">
              <option value="design">Diseño</option>
              <option value="web">Desarrollo Web</option>
              <option value="animation">Animacion</option>
              <option value="music">Musica</option>
            </select>
            <label htmlFor="">Miniatura</label>
            <input type="file" />
            <label htmlFor="">Agrega fotos de tu servicio</label>
            <input type="file"  multiple onChange={handleChange}/>
            <label htmlFor="">Breve descripcion para tu miniatura</label>
            <textarea name="" id="" placeholder="Descripciones breves para presentar su servicio a los clientes." cols="0" rows="16"></textarea>
           {/* <Link className='link' to="/myGigs">
            <button onSubmit={handleSubmit}>Publicar</button>
  </Link> */}
            <button onClick={handleSubmit}>Publicar</button>
            </div>
            <div className="details">
            <label htmlFor="">Cual es el nombre de tu servicio?</label>
            <input type="text" placeholder="ejemplo: GarzaLance" onChange={handleChange3}/>
            <label htmlFor="">Descripcion de tu servicio</label>
            <textarea name="" id="" placeholder="Breve descripcion de tu servicio o producto" cols="30" rows="10" onChange={handleChange4}></textarea>
            <label htmlFor="">Tiempo de entrega (ejemplo 3 dias)</label>
            <input type="number"  onChange={handleChange6}/>
            <label htmlFor="">Cuantas reseñas quieres que se muestren en tu publicacion?</label>
            <input type="number" />
            <label htmlFor="">Cuales son las caracteristicas de tu servicio?</label>
            <input type="text" placeholder="e.g. diseño de pagina" onChange={handleChange8}/>
            <input type="text" placeholder="e.g. subir archivos" onChange={handleChange8}/>
            <input type="text" placeholder="e.g. configura tu dominio" onChange={handleChange8}/>
            <input type="text" placeholder="e.g. hosting" onChange={handleChange8}/>
            <label htmlFor="">Precio apartir de</label>
            <input type="number" onChange={handleChange7}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;