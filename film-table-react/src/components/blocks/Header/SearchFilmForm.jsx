import Field from "../../Field.jsx";

const SearchFilmForm = (props) => {
    const {
        searchQuery,
        setSearchQuery,
    } = props
    return (
        <form className="form">
            <Field
                className="search__field"
                type="search"
                placeholder="Search film"
                id="search-field"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchFilmForm