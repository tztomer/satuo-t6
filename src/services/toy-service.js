import { utilService } from "./util-service.js";
import axios from "axios";

export const toyService = {
  query,
  getById,
  getEmptyToy,
  saveToy,
  removeToy,
};


function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy'

  return `${BASE_URL}/${id}`

  
}

function query(filterBy = null) {
  return axios.get(_getUrl(), { params: filterBy }).then((res) => res.data);
}

function getById(toyId) {
  return axios.get(_getUrl(toyId)).then((res) => res.data);
}

function getEmptyToy() {
  return {
    name: "",
    price: utilService.getRandomIntInclusive(0, 300),
    labels: ["Battery powered", "Outdoor"],
    createdAt: Date.now(),
    inStock: true,
    reviews: ["review 1 best 1", "review 2 almost 1", "review 3 far from 1"],
  };
}

function saveToy(toy) {
  if (toy._id) {
    return axios.put(_getUrl(toy._id), toy).then((res) => res.data);
  } else {
    return axios.post(_getUrl(), toy).then((res) => res.data);
  }
}

function removeToy(toyId) {
  return axios.delete(_getUrl(toyId)).then((res) => res.data);
}
