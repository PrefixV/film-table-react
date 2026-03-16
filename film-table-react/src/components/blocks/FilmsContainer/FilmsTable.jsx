import FilmsTableItem from "./FilmsTableItem.jsx";
import {memo} from "react";

const FilmsTable = (props) => {
    const {
        films,
        deleteFilm,
        toggleIsDone,
    } = props

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
            {films.map((film) => {
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
            </tbody>
        </table>
    )
}

export default memo(FilmsTable);