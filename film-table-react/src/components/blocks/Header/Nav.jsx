import SearchFilmForm from "./SearchFilmForm.jsx";
import Button from "../../Button.jsx";

const Nav = (props) => {
    const {
        openModal,
        films,
        searchQuery,
        setSearchQuery,
        doneFilms,
    } = props

    return (
        <nav className="header-nav">
            <p className="header-nav__total-films__watch">
                {`Всего просмотренно ${doneFilms} фильмов`}
            </p>
            <SearchFilmForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            />
            <Button
                className="open__modal__button"
                type="button"
                onClick={openModal}
            >
                +
            </Button>
        </nav>
    )
}

export default Nav