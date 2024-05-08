import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>
                Encuentra el perfecto servicio <i>freelance</i> para tu negocio
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="/img/search.png" alt="" />
                        <input type="text" placeholder='Prueba con Pixel Art'/>
                    </div>
                    <button>Buscar</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Diseño Web</button>
                    <button>Hola Mundo</button>
                    <button>Diseño de logo</button>
                    <button>Tutorias de calculo</button>
                </div>
            </div>
            <div className="right">
                <img src="/img/chica.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured