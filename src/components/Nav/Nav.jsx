import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch}) {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}