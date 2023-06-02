import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";

function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
    }
    
    const handleFilter = (evento) => {
        dispatch(filterCards(evento.target.value))
    }
    return (<div>
        <div>
            <select name="order" onChange={handleOrder}>
                <option value="A">A</option>
                <option value="D">D</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        <div>{myFavorites.map(({name, status, species, gender, origin, image,id}) => (
        <Card
        key={id}
         id={id}
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin.name}
         image={image}
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