import FilmsTableItem from "./FilmsTableItem.jsx";
import {memo, useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";

const FilmsTable = () => {
   const {
       films,
       filteredFilms,
       toggleIsDone,
       deleteFilm,
       lastAddedFilmRef,
   } = useContext(FilmsContext);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Название
                    </th>
                    <th>
                        Тип
                    </th>
                    <th>
                        Сезон
                    </th>
                    <th>
                        Серия
                    </th>
                    <th>
                        Дата
                    </th>
                    <th>
                        Действия
                    </th>
                </tr>
            </thead>
            <tbody>
            {filteredFilms.map((film, index) => {
                return (
                    <FilmsTableItem
                        {...film}
                        key={film.id}
                        deleteFilm={deleteFilm}
                        toggleIsDone={toggleIsDone}
                        className={film.isDone ? "table-item-done" : ""}
                    />
                )
            })}

            {filteredFilms.length === 0 && (
                <tr><td className="empty-films__message">Нет добавленных фильмов</td></tr>
            )}
            </tbody>
        </table>
    )
}

export default memo(FilmsTable);