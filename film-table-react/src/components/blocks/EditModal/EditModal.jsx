import Button from "../../Button.jsx";
import Field from "../../Field.jsx";
import {useContext} from "react";
import {FilmsContext} from "../../../context/FilmsContext.jsx";

const EditModal = () => {
    const {
        editModal,
        closeEditModal,
        editSeries,
        editSeason,
        setEditSeason,
        setEditSeries,
        saveEditedFilm
    } = useContext(FilmsContext);
    return (
        <form action=""
              onSubmit={(event) => event.preventDefault()}
              className={editModal ? "edit-modal-form" : "edit-modal-form--hidden"}>
            <div className="edit-modal-form__header">
                <h2 className="edit-modal-form__header-title">
                    Редактировать
                </h2>
                <Button
                className="button--close"
                type="button"
                onClick={closeEditModal}
                >
                    X
                </Button>
            </div>
            <div className="edit-modal-form__body">
                <Field
                    className="field__edit-season"
                    type="text"
                    placeholder="Изменить сезон"
                    id="edit-season"
                    value={editSeason || ""}
                    onInput={(event) => setEditSeason(event.target.value)}
                />
                <Field
                    className="field__edit-series"
                    type="text"
                    placeholder="Изменить серию"
                    id="edit-series"
                    value={editSeries || ""}
                    onInput={(event) => setEditSeries(event.target.value)}
                />
            </div>
            <Button
            type="button"
            className="edit-modal-form__button"
            onClick={saveEditedFilm}
            >
                Подтвердить
            </Button>
        </form>
    )
}

export default EditModal;