import React, { useRef, useState, useEffect } from "react";
import "./Gigs.scss";
import { fetchGigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [gigs, setGigs] = useState([]);
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  useEffect(() => {
    fetchGigs()
      .then(gigsData => {
        setGigs(gigsData);
      })
      .catch(error => {
        // Manejo de errores
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">GarzaLance  Graficos y Diseño </span>
        <h1>Diseño Web</h1>
        <p>
          Explora los mejores servicios de diseño web para tu negocio.
        </p>
        <div className="menu">
          <div className="left">
            <span>Presupuesto</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordenar por</span>
            <span className="sortType">
              {sort === "sales" ? "Mejor vendido" : "Lo mas nuevo"}
            </span>
            <img src="/img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Lo mas nuevo</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Mejor vendido</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
