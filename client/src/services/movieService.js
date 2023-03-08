import axios from "axios";

const baseURL = "http://localhost:3001/movies"

const getAll = () => axios.get(baseURL);
const create = (newMovie) => axios.post(baseURL, newMovie)
const update = (id, newMovie) => axios.put(`${baseURL}/${id}`, newMovie);
const remove = (id) => axios.delete(`${baseURL}/${id}`)

export {
    getAll,
    create,
    update,
    remove
}