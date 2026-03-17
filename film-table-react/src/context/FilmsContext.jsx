import { createContext } from "react";
import useFilms from "../hooks/useFilms.jsx";

export const FilmsContext = createContext({})

export const FilmsProvider = (props) => {
    const {
        children,
    } = props;

    const {
        films,
        filteredFilms,
        deleteFilm,
        addFilm,
        toggleIsDone,
        doneFilms,
        searchQuery,
        setSearchQuery,
        openModal,
        modal,
        closeModal,
        newFilmName,
        setNewFilmName,
        newFilmType,
        setNewFilmType,
        newFilmSeries,
        setNewFilmSeries,
        newFilmSeason,
        setNewFilmSeason,
        openEditModal,
        closeEditModal,
        editModal,
        error,
        setError,
        editSeries,
        editSeason,
        setEditSeason,
        setEditSeries,
        saveEditedFilm,
        editingFilmId,
        setEditingFilmId,
        filterType,
        setFilterType,
        filteredByType
    } = useFilms()

    return (
        <FilmsContext.Provider
            value={{
                films,
                filteredFilms,
                deleteFilm,
                addFilm,
                toggleIsDone,
                doneFilms,
                searchQuery,
                setSearchQuery,
                openModal,
                modal,
                closeModal,
                newFilmName,
                setNewFilmName,
                newFilmType,
                setNewFilmType,
                newFilmSeries,
                setNewFilmSeries,
                newFilmSeason,
                setNewFilmSeason,
                openEditModal,
                closeEditModal,
                editModal,
                error,
                setError,
                editSeries,
                editSeason,
                setEditSeason,
                setEditSeries,
                saveEditedFilm,
                editingFilmId,
                setEditingFilmId,
                filterType,
                setFilterType,
        }}
       >
            {children}
        </FilmsContext.Provider>
    )
}
