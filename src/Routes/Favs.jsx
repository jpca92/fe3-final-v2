import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [destacados, setDestacados] = useState([]);
  
  const handleRenderFavs = (newFavs) =>{
    setDestacados(newFavs)
  }

  const resetFavs = () => {
    localStorage.setItem("favs", JSON.stringify([]))
    setDestacados([])
  }
  

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('favs'))){
      setDestacados(
        JSON.parse(localStorage.getItem('favs'))
      )
    }
    
  },[])
  return (
    <><div className="fav-container-tittle-button">
      <h1>Dentists Favs</h1>
      <button className="vaciarButton" onClick={resetFavs}>Vaciar Favoritos</button>
    </div>
      
      <div className="favs-container card-grid"> 
        {destacados.map((fav, index) =>{
          return(<Card key={index} name={fav.name} username={fav.username} id={fav.id} show={false} renderFavs={handleRenderFavs}/>)
        })}
      </div>
    </>
  );
};

export default Favs;
