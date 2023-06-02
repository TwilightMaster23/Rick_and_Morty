import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";



function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((charFav) => {
         if (charFav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   function handleFavorite() {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   return (
      <div className={style.container}>
         <img className={style.marco} src={image} alt="" />
         <button className={style.close} onClick={() => {onClose(id)}}>X</button>
         {
   isFav ? (
      <button className={style.fav} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={style.fav} onClick={handleFavorite}>🤍</button>
   )
}
         <h2>{id}</h2>
        <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         {/* <h2>status:{status}</h2> */}
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{origin}</h2> */}
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: function(character) {
         dispatch(addFav(character))
      },
      removeFav: function(id) {
         dispatch(removeFav(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
