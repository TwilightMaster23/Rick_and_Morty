import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import style from "./favorites.module.css"

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
    }
    
    const handleFilter = (evento) => {
        const selectedValue = evento.target.value;
        const filterValue = selectedValue === "All" ? null : selectedValue;
        dispatch(filterCards(filterValue))
    }
    return (<div>
        <div className={style.filtrados}>
            <select name="order" onChange={handleOrder}>
                <option value='text'>Ordenar por ID</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option value='text'>Filtrar</option>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div className={style.container}>{myFavorites.map(({name, status, species, gender, origin, image,id}) => (
        <Card
        key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
         isFavoriteView={true}
         />
    ))}</div>
    </div>)
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);