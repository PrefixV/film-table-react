import "./styles/styles.scss"
import Header from "./components/blocks/Header/Header.jsx";
import AddFilmModal from "./components/blocks/Modal/AddFilmModal.jsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import FilmsTable from "./components/blocks/FilmsContainer/FilmsTable.jsx";

function App() {

const [modal, setModal] = useState(false);
const openModal = () => {
    setModal(true);
}

const closeModal = () => {
    setModal(false);
}

const [films, setFilms] = useState(() => {
    const savedFilms = localStorage.getItem("films");
    if(savedFilms) {
        return JSON.parse(savedFilms);
    }
    return [];
});

const toggleIsDone = useCallback(
    (id) => {
        setFilms(
            films.map((film) => {
                if(film.id === id) {
                    return {
                        ...film,
                        isDone: !film.isDone,
                    }
                }
                return film;
            })
        )
    }
, [films]);

const [newFilmName, setNewFilmName] = useState("");
const [newFilmType, setNewFilmType] = useState("");
const [newFilmSeries, setNewFilmSeries] = useState("");
const [newFilmSeason, setNewFilmSeason] = useState("");

const addFilm = useCallback(
    () => {
        if(newFilmName.length > 0){
            const newFilm = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                name: newFilmName,
                type: newFilmType,
                series: newFilmSeries,
                season: newFilmSeason,
                date: new Date().toLocaleDateString("ru-RU"),
                isDone: false,
            }

            if(newFilm.season === "" && newFilm.series === ""){
                newFilm.series = "-"
                newFilm.season = "-"
            }

            if(newFilm.type === "") {
                newFilm.type = "Film"
            }

            setFilms((prevFilms) => [...prevFilms, newFilm]);
            setNewFilmName("");
            setNewFilmType("");
            setNewFilmSeries("");
            setNewFilmSeason("");
            closeModal();
        }
    }
, [newFilmSeries, newFilmName, newFilmSeason, newFilmType])

    const deleteFilm = useCallback(
        (id) => {
            setFilms(
                films.filter((film) => {
                    return film.id !== id;
                })
            )
        }
    ,[films])

    const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
}, [films])

    const filteredFilms = useMemo(() => {
        return films.filter(({ name, type }) =>
            name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            type.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, films]);

const doneFilms = useMemo(() => {
    return  films.filter(({isDone}) => isDone).length
}, [films]);

  return (
    <>
      <Header
      openModal={openModal}
      films={filteredFilms}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      doneFilms={doneFilms}
      />
        <AddFilmModal
            modal={modal}
            closeModal={closeModal}
            addFilm={addFilm}
            setNewFilmName={setNewFilmName}
            setNewFilmType={setNewFilmType}
            setNewFilmSeries={setNewFilmSeries}
            setNewFilmSeason={setNewFilmSeason}
            newFilmType={newFilmType}
            newFilmName={newFilmName}
            newFilmSeries={newFilmSeries}
            newFilmSeason={newFilmSeason}
        />

        <FilmsTable
        films={filteredFilms}
        deleteFilm={deleteFilm}
        toggleIsDone={toggleIsDone}
        />
    </>
  )
}

export default App
