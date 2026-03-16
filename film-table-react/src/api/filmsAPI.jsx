const URL = "http://localhost:3001/films";
const headers = {
    "Content-Type": "application/json",
}

const filmsAPI = {
    getAll: () => {
        return fetch(URL).then(res => res.json())
    },

    add: (film) => {
        return  fetch(URL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(film),
        })
            .then(res => res.json())
    },

    delete: (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE",
        });
    },

    toggleDone: (id, newIsDone) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({ isDone: newIsDone })
        });
    },

    saveEdit: (id, newSeason, newSeries) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({season: newSeason, series: newSeries})
        })
    }
}

export default filmsAPI;