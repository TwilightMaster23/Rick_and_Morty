import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if(!characters.find(char => char.id === data.id)) {      
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } else {
         alert(`Ya existe el personaje con el id ${id}`)
      }
      }).catch(() => window.alert('¡No hay personajes con este ID!'))
   }

   const onCLose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }
      

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onCLose}/>
      </div>
   );
}

export default App;
