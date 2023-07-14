import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav ({onSearch, logout}) {
    return (
        <nav className={style.container}>
            <Link to={'/home'}><button className={style.containerButton}>Home</button></Link>
            <Link to={'/favorites'}><button className={style.containerButton}>Favorites</button></Link>
            <Link to={'/about'}><button className={style.containerButton}>About</button></Link>
            <SearchBar onSearch={onSearch} />
            <Link to={'/'}><button className={style.containerButton}>Log out</button></Link>
        </nav>
    )
}

