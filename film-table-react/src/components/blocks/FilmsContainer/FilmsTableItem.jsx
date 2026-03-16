import Button from "../../Button.jsx";
import {memo} from "react";

const FilmsTableItem = (props) => {
    const {
        className,
        date,
        name,
        type,
        isDone,
        series,
        season,
        deleteFilm,
        id,
        toggleIsDone,
    } = props

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
            </td>
        </tr>
    )
}

export default memo(FilmsTableItem);