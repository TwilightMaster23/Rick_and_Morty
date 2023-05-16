import style from "./Card.module.css";

export default function Card({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div className={style.container}>
         <img className={style.marco} src={image} alt="" />
         <button onClick={() => {onClose(id)}}>X</button>
         <h2>{name}</h2>
         {/* <h2>status:{status}</h2> */}
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{origin}</h2> */}
      </div>
   );
}
