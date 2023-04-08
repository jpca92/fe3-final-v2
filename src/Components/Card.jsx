import React, { useEffect} from "react";
import dentistImage from '../images/doctor.jpg'
import { Link } from 'react-router-dom';
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, show}) => {

  const {favs, setFavs} = useContextGlobal()

  useEffect(() => {
    const favStorage = JSON.parse(localStorage.getItem("favs"));
    if (favStorage) {
      setFavs(favStorage);
    }
  }, []);

  const addFav = () => {
    alert("dentist added successfully")
    const fav = {
      'id': id,
      'name': name,
      'username': username,
    }

  const showAlert = () => {alert("dentist added successfully")}

    const index = favs.findIndex(fav => fav.id === id);
    if(index === -1){
      const updateFavs = [...favs, fav];
      setFavs(updateFavs);
      localStorage.setItem("favs", JSON.stringify(updateFavs));
    }
  }


  return (

    <div className="card">
       <Link to={`/detail/${id}`}> <img src={dentistImage} alt="dentist"/> </Link>
       <h3>{name}</h3>
        <p>{username}</p>
        <div>{((favs.findIndex(fav => fav.id === id)) !== -1) && 
        <div className="favorito">Añadido a Favoritos</div>}</div>
        
        {show && <button onClick={addFav}  className="favButton">⭐</button>}
    </div>
  );
};

export default Card;
