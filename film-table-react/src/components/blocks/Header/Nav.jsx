import SearchFilmForm from "./SearchFilmForm.jsx";
import Button from "../../Button.jsx";
import {useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";

const Nav = () => {
    const {
        openModal,
        doneFilms,
    } = useContext(FilmsContext)

    return (
        <nav className="header-nav">
            <p className="header-nav__total-films__watch">
                {`Всего просмотренно ${doneFilms} фильмов`}
            </p>
            <SearchFilmForm />
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