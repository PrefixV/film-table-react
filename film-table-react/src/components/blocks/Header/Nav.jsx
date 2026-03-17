import SearchFilmForm from "./SearchFilmForm.jsx";
import Button from "../../Button.jsx";
import {useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";
import Select from "../../Select.jsx";

const Nav = () => {
    const {
        openModal,
        doneFilms,
        filterType,
        setFilterType,
    } = useContext(FilmsContext)

    return (
        <nav className="header-nav">
            <p className="header-nav__total-films__watch">
                {`Всего просмотренно ${doneFilms} фильмов`}
            </p>
            <Select
                className="filter-select"
                value={filterType}
                onChange={(event) => setFilterType(event.target.value)}
            >
                <option value="name">
                    Название
                </option>
                <option value="type">
                    Тип
                </option>
                <option value="date">
                    Дата
                </option>
            </Select>
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