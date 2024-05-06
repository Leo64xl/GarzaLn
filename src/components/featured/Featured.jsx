import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>
                Encuentra el perfecto <i>freelance</i> servicios para tu negocio
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="/img/search.png" alt="" />
                        <input type="text" placeholder='Try "building mobil app'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Diseño Web</button>
                    <button>WordPress</button>
                    <button>Diseño de logo</button>
                    <button>Servicios IA</button>
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