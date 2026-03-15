import "./styles/styles.scss"
import Header from "./components/blocks/Header/Header.jsx";
import AddFilmModal from "./components/blocks/Modal/AddFilmModal.jsx";
import {useEffect, useState} from "react";
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

const toggleIsDone = (id) => {
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

const [newFilmName, setNewFilmName] = useState("");
const [newFilmType, setNewFilmType] = useState("");
const [newFilmSeries, setNewFilmSeries] = useState("");
const [newFilmSeason, setNewFilmSeason] = useState("");

const addFilm = () => {
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

        setFilms(films => [...films, newFilm]);
        setNewFilmName("");
        setNewFilmType("");
        setNewFilmSeries("");
        setNewFilmSeason("");
        closeModal();
    }
}

    const deleteFilm = (id) => {
        setFilms(
            films.filter((film) => {
                return film.id !== id;
            })
        )
    }

    const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
}, [films])

    const filteredFilms = films.filter(({ name, type }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <Header
      openModal={openModal}
      films={filteredFilms}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
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
