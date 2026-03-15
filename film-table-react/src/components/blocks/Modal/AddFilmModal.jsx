import Button from "../../Button.jsx";
import Field from "../../Field.jsx";
import Select from "../../Select.jsx";

const AddFilmModal = (props) => {
    const {
        modal,
        closeModal,
        addFilm,
        setNewFilmName,
        setNewFilmSeries,
        setNewFilmSeason,
        setNewFilmType,
        newFilmType,
        newFilmSeries,
        newFilmSeason,
        newFilmName,
    } = props
    return (
        <div className={modal ? "add-film-modal" : "add-film-modal--hidden"}>
            <div className="add-film-modal__header">
                <h2 className="add-film-modal__header-title">
                    Add Film
                </h2>
                <Button
                    className="add-film-modal__button--close"
                    type="button"
                    onClick={closeModal}
                >
                    X
                </Button>
            </div>
            <div className="add-film-modal__body">
                <Field
                    className="add-film-modal__film-name"
                    id="film-name"
                    placeholder="Film Name"
                    value={newFilmName}
                    onInput={(event) => setNewFilmName(event.target.value)}
                />
                <Select
                    onChange={(event) => setNewFilmType(event.target.value)}
                    value={newFilmType}
                >
                    <option value="Film">
                        Film
                    </option>
                    <option value="Serial">
                        Serial
                    </option>
                    <option value="Cartoon">
                        Cartoon
                    </option>
                </Select>
                {newFilmType === "Serial" && (
                    <>
                        <Field
                            placeholder="Series"
                            onInput={(event) => setNewFilmSeries(event.target.value)}
                            value={newFilmSeries}
                        />

                        <Field
                            placeholder="Season"
                            onInput={(event) => setNewFilmSeason(event.target.value)}
                            value={newFilmSeason}
                        />
                    </>
                    )}
            </div>
            <Button
                className="add-film-modal__button"
                type="button"
                onClick={addFilm}
            >
                Add film
            </Button>
        </div>
    )
}

export default AddFilmModal