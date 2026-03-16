import Field from "../../Field.jsx";
import {useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";

const SearchFilmForm = () => {
    const {
        searchQuery,
        setSearchQuery,
    } = useContext(FilmsContext)

    return (
        <form className="form" onSubmit={(event) => event.preventDefault()}>
            <Field
                className="search__field"
                type="search"
                placeholder="Найти фильм"
                id="search-field"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchFilmForm;