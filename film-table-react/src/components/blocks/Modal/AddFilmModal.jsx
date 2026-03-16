import Button from "../../Button.jsx";
import Field from "../../Field.jsx";
import Select from "../../Select.jsx";
import {useContext, useState} from "react";
import  {FilmsContext } from "../../../context/FilmsContext.jsx";

const AddFilmModal = () => {
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
        error,
        setError,
    } = useContext(FilmsContext);

    const onInput = (event) => {
        const {value} = event.target;
        const clearValue = value.trim();
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

        setNewFilmName(value)
        setError(hasOnlySpaces ? "Название фильма не может быть пустым" : '');
    }

    return (
        <div className={modal ? "add-film-modal" : "add-film-modal--hidden"}>
            <div className="add-film-modal__header">
                <h2 className="add-film-modal__header-title">
                    Добавить фильм
                </h2>
                <Button
                    className="button--close"
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
                    placeholder="Название"
                    value={newFilmName}
                    onInput={onInput}
                    error={error}
                />
                <Select
                    onChange={(event) => setNewFilmType(event.target.value)}
                    value={newFilmType}
                >
                    <option value="Film">
                        Фильм
                    </option>
                    <option value="Serial">
                        Сериал
                    </option>
                    <option value="Cartoon">
                        Мультфильм
                    </option>
                </Select>
                {newFilmType === "Serial" && (
                    <>
                        <Field
                            placeholder="Серия"
                            onInput={(event) => setNewFilmSeries(event.target.value)}
                            value={newFilmSeries}
                        />

                        <Field
                            placeholder="Сезон"
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
                isDisabled={newFilmName.trim().length === 0}
            >
                Добавить
            </Button>
        </div>
    )
}

export default AddFilmModal