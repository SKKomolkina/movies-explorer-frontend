const BASE_URL = 'https://api.nomoreparties.co/';

class MoviesApi {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    getMovies() {
        return fetch(`${this._url}/beatfilm-movies`,{
            headers: this._headers,
        })
            .then(res => this._checkResult(res));
        }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const movieApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default movieApi
