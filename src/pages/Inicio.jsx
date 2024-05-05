import React, { useState } from 'react';
import '../Diseños_css/Inicio.css';
import { Link } from 'react-router-dom';

const Inicio = () => {
    
  return (    
    
    <div className="home-container">
  <section className='s1'>
    <p className="welcome1">
      ¡Bienvenido!, te iniviamos a formar parte de esta comunidad. Somos un equipo de desarrolladores comprometidos a brindarte la mejor experiencia posible. Nos esforzamos por crear una plataforma que no solo te ayude a exhibir tus habilidades, sino que también te brinde oportunidades reales de crecimiento y éxito. En Garazalance, valoramos la diversidad de talentos y experiencias. Creemos que cada estudiante tiene algo único que ofrecer, y queremos ayudarte a destacar y monetizar tus habilidades de la mejor manera posible.
    </p>
  </section>            

  <section className="s2">         
    <h2 className='group-titles'>Equipo de desarrollo:</h2> 
    <ul>
      <li className='group-names'>*Aldana Zamudio Alexis Vladimir | D. Backend</li>
      <li className='group-names'>*Miranda Muñoz Marco Antonio | D. Frontend</li>
      <li className='group-names'>*Portela Reinoso Leonardo Rey | D. Backend</li>
      <li className='group-names'>*Peña Escamilla Luis Angel | D. Frontend</li>
    </ul>
  </section>

  <section className='s3'>
    <p className='group-titles3'>
      Esta plataforma ofrece un espacio interactivo donde los estudiantes podrán exhibir sus portafolios de habilidades, tarifas, servicios ofrecidos, y establecer una conexión directa con clientes que requieran de sus habilidades y competencias de manera efectiva. Este enfoque estratégico garantiza la sostenibilidad y el éxito continuo del proyecto de software, cumpliendo con el objetivo de crear un espacio digital que facilite el acceso a pequeñas oportunidades de emprendimiento y permita a los estudiantes aplicar y monetizar sus habilidades de manera efectiva y segura. Te invitamos a leer los <Link to="/terminos-y-condiciones" className="terms-link2">términos y condiciones</Link>, Se advierte que el incumplimiento de estas reglas puede resultar en sanciones dentro de la plataforma, lo que subraya la necesidad de respetar las normas establecidas para una experiencia positiva para todos los usuarios.
    </p>
  </section>  

  <section className='s4'>
    <p className='group-names'>
      ¿Listo para empezar? Presiona el botón "¡Empezar ahora!" para unirte a nuestra comunidad.
    </p> 
  </section>

 <div className="btn">
  <button>
    <Link to="/registro-usuario" className="start-button">¡Empezar ahora!</Link>
  </button>
  </div>
</div>
  )
}

export default Inicio