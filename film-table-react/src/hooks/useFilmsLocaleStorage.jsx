import {useEffect, useState} from "react";

const useFilmsLocaleStorage = () => {
        const savedFilms = localStorage.getItem("films");
        const saveFilms = (films) => {
            localStorage.setItem("films", JSON.stringify(films));
        }

    return {
        savedFilms : savedFilms ? JSON.parse(savedFilms) : null,
        saveFilms
    }
}

export default useFilmsLocaleStorage