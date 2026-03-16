import Button from "../../Button.jsx";
import {memo, useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";

const FilmsTableItem = (props) => {
    const {
        className,
        date,
        name,
        type,
        series,
        season,
        deleteFilm,
        id,
        toggleIsDone,
    } = props

    const {
        films,
    } = useContext(FilmsContext);

    const {
        openEditModal,
    } = useContext(FilmsContext);

    return (
        <tr className={`table-item ${className}`} id={id}>
            <td>
                {name}
            </td>
            <td>
                {type}
            </td>
            <td>
                {season}
            </td>
            <td>
                {series}
            </td>
            <td>
                {date}
            </td>
            <td className="table-item__button-wrapper">
                <Button
                type="button"
                onClick={() => toggleIsDone(id)}
                >
                    <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                    </svg>
                </Button>
                <Button
                type="button"
                onClick={() => deleteFilm(id)}
                >
                    <svg className="w-[24px] h-[24px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </Button>
                {type === "Serial" && (
                    <Button
                    type="button"
                    onClick={() => {
                        const film = films.find(f => f.id === id);
                        if(film) openEditModal(film);
                    }}
                    >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>
                    </Button>
                )}
            </td>
        </tr>
    )
}

export default memo(FilmsTableItem);