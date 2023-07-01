import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'

export default function Detail () {
    const {id} = useParams()

    const [characterDetail, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);      
    
    return (
        <div className={style.container}>
            <h2>Name: {characterDetail.name}</h2>
            <h4>Status: {characterDetail.status}</h4>
            <h4>Species: {characterDetail.species}</h4>
            <h4>Gender: {characterDetail.gender}</h4>
            <h4>Origin: {characterDetail.origin?.name}</h4>
            <img src={characterDetail.image} alt="" />
        </div>
    )
}