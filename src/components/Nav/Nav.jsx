import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch, logout}) {
    return (
        <nav>
            <Link to={'/home'}><button>Home</button></Link>
            <Link to={'/favorites'}><button>Favorites</button></Link>
            <Link to={'/about'}><button>About</button></Link>
            <SearchBar onSearch={onSearch} />
            <Link to={'/'}><button>Log out</button></Link>
        </nav>
    )
}

