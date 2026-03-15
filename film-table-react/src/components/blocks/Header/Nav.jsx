import SearchFilmForm from "./SearchFilmForm.jsx";
import Button from "../../Button.jsx";

const Nav = (props) => {
    const {
        openModal,
        films,
        searchQuery,
        setSearchQuery,
    } = props

    return (
        <nav className="header-nav">
            <p className="header-nav__total-films__watch">
                {`Всего просмотренно ${films.filter(({isDone}) => isDone).length} фильмов`}
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