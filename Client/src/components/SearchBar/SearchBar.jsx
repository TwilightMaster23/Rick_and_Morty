import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

const [id,setId] = useState("");

const handleChange = (event) => {
   setId(event.target.value); 
}

function search () {
   onSearch(id)
   setId('')
}
   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} value={id} placeholder='Id del personaje' />
         <button onClick={() => search()}>Agregar</button>
      </div>
   );
}
