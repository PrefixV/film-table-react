import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import filmsAPI from "../api/filmsAPI.jsx"
import filmAPI from "../api/filmsAPI.jsx";

const useFilms = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

   const [films, setFilms] = useState([]);

    const toggleIsDone = useCallback((id) => {
        setFilms(prevFilms =>
            prevFilms.map(film => {
                if (film.id === id) {

                    const newIsDone = !film.isDone;

                    filmsAPI.toggleDone(id, newIsDone);
                    return { ...film, isDone: newIsDone };
                }

                return film;
            })
        );
    }, []);

    const [newFilmName, setNewFilmName] = useState("");
    const [newFilmType, setNewFilmType] = useState("");
    const [newFilmSeries, setNewFilmSeries] = useState("");
    const [newFilmSeason, setNewFilmSeason] = useState("");

    const addFilm = useCallback(() => {

        if (!newFilmName) return;

        const newFilm = {
            name: newFilmName,
            type: newFilmType || "Film",
            series: newFilmSeries || "-",
            season: newFilmSeason || "-",
            date: new Date().toLocaleDateString("ru-RU"),
            isDone: false,
        };

        filmsAPI.add(newFilm)
            .then((addedFilm) => {
                setFilms(prev => [...prev, addedFilm]);

                setNewFilmName("");
                setNewFilmType("");
                setNewFilmSeries("");
                setNewFilmSeason("");

                closeModal();
            });

    }, [newFilmName, newFilmType, newFilmSeries, newFilmSeason]);

    const deleteFilm = useCallback((id) => {

        setFilms(prevFilms =>
            prevFilms.filter(film => film.id !== id)
        );

        filmsAPI.delete(id);

    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    const filteredFilms = useMemo(() => {
        return films.filter(({ name, type }) =>
            name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            type?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, films]);

    const doneFilms = useMemo(() => {
        return  films.filter(({isDone}) => isDone).length
    }, [films]);

    const [editModal, setEditModal] = useState(false);

    const [editingFilmId, setEditingFilmId] = useState("");

    const openEditModal = (film) => {
        setEditingFilmId(film.id);
        setEditSeason(film.season);
        setEditSeries(film.series);
        setEditModal(true);
    }

    const closeEditModal = () => {
        setEditModal(false);
    }

    const [error, setError] = useState("");

    const [editSeries, setEditSeries] = useState("");
    const [editSeason, setEditSeason] = useState("");

    const saveEditedFilm = () => {
        filmsAPI.saveEdit(editingFilmId, editSeason, editSeries)
            .then(() => {
                setFilms(prevFilms =>
                    prevFilms.map(film => {
                        if(film.id === editingFilmId) {
                            return {...film, series: editSeries, season: editSeason};
                        }
                        return film;
                    })
                )
            })

        closeEditModal();
        setEditSeries("");
        setEditSeason("");
    }

    useEffect(() => {
        filmsAPI.getAll().then(setFilms)
    }, []);

    return (
        {
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
            editModal,
            openEditModal,
            closeEditModal,
            error,
            setError,
            editSeries,
            editSeason,
            setEditSeason,
            setEditSeries,
            saveEditedFilm,
            editingFilmId,
            setEditingFilmId,
        }
    )

}

export default useFilms;