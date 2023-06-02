import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites.jsx'


function App() {

   const {pathname} = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const EMAIL = "brian@henry.com"
   const PASSWORD = "asd123"

   function login ({email, password}) {
      if(email === EMAIL && password === PASSWORD) {
         setAccess(true)
         navigate('/home')
      } else {
         alert("El email y/o contraseña son incorrectos")
      }
   }

   function logout () {
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         { pathname !== '/' && <Nav onSearch={onSearch} logout={logout} /> }
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onCLose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
            <Route path='*' element={<Error404/>} />
         </Routes>
      </div>
   );
}

export default App;
