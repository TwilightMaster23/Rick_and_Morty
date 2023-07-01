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
   const [access, setAccess] = useState(false);

   async function login({email, password}) {
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access} = data
         setAccess(access)
         access && navigate('/home');
      } catch ({response}) { 
         const { data } = response
         alert(data.message)
      }
   } 
   

   function logout () {
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      if(characters.find(char => char.id === id)){
         return alert(`Ya existe el personaje con el id ${id}`)
      }
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
         setCharacters(oldChars => [...oldChars, data]);
      } catch (error) {
         alert(`No existen personajes con el id ${id}`)
      }
   
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== id))
   }
      

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} logout={logout} /> }
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites isFavoriteView={true}/>}/>
            <Route path='*' element={<Error404/>} />
         </Routes>
      </div>
   );
}

export default App;
