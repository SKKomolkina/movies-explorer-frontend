import {BASE_URL} from './url';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password, name})
    })
        .then(response => checkResult(response))
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password})
    })
        .then(response => checkResult(response))
        .then((data) => {
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                return data;
            }
        })
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response => checkResult(response)))
};

export const getSavedMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => checkResult(response));
};

export const saveMovie = (token, {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
}) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            country: country === "" ? nameEN : country,
            director,
            duration,
            year,
            description,
            image: `https://api.nomoreparties.co${image.url}`,
            trailerLink: trailerLink === null ? `https://api.nomoreparties.co${image.url}` : trailerLink,
            thumbnail: `https://api.nomoreparties.co${image.url}`,
            nameRU,
            nameEN: nameEN === '' ? nameRU : nameEN,
            movieId: id,
        })
    })
        .then(response => checkResult(response));
};


export const removeMovieFromSaved = (movieId, token) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(response => checkResult(response));
};

export const getUserInfo = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => checkResult(response));
};

export const updateProfile = (token, {name, email}) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
    })
        .then(response => checkResult(response));
};

function checkResult(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`???????????? ${res.status}`);
}
