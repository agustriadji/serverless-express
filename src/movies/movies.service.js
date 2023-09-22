"use strict";

const {
  addMovies_Spec,
  detailMovies_Spec,
  editMovies_Spec,
  updateStatusMovies_Spec,
  removeMovies_Spec,
} = require("./movies.spec");
const {
  getMovies_Module,
  detailMovies_Module,
  addMovies_Module,
  editMovies_Module,
  updateStatusMovies_Module,
} = require("./movies.module");

/**
 * getMovies_Service
 * @function getMovies_Service services get movies
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function getMovies_Service() {
  try {
    let res = null;
    res = await getMovies_Module();
    return {...res};
  } catch (error) {
    return {error: true, message: error, data: {}};
  }
}

/**
 * detailMovies_Service
 * @function detailMovies_Service services detail movies
 * @param {string} moviesId required
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function detailMovies_Service(moviesId) {
  try {
    let res = null;
    res = await detailMovies_Spec(moviesId);
    if (!res.error) {
      res = await detailMovies_Module(res.data.moviesId);
      if (res.data.length) {
        res.data = res.data[0];
      } else {
        res.message = "Data not found";
      }
    }

    return {...res};
  } catch (error) {
    return {error: true, message: error, data: {}};
  }
}

/**
 * addMovies_Service
 * @function addMovies_Service services add item to movies
 * @param {object} payload
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @param {string} payload.status optional default active
 * @example * var payload = { title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function addMovies_Service(payload) {
  try {
    let res = await addMovies_Spec(payload);
    if (!res.error) {
      res = await addMovies_Module(res.data);
    }
    return {...res};
  } catch (error) {
    return {error: true, message: error, data: {}};
  }
}

/**
 * editMovies_Service
 * @function editMovies_Service services edit course
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @param {string} payload.status optional default active
 * @example * var payload = { moviesId:12, title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function editMovies_Service(payload) {
  try {
    let res = await editMovies_Spec(payload);
    if (!res.error) {
      res = await editMovies_Module(res.data);
    }
    return {...res};
  } catch (error) {
    return {error: true, message: error, data: {}};
  }
}

/**
 * updateStatusMovies_Service
 * @function updateStatusMovies_Service services udpate status course
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.status optional default active
 * @example * var payload = { moviesId:213123,, status:"inactive" }; *
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function updateStatusMovies_Service(payload) {
  try {
    let res = await updateStatusMovies_Spec(payload);
    console.log(res.data, 9999);
    if (!res.error) {
      res = await updateStatusMovies_Module(res.data);
    }
    return {...res};
  } catch (error) {
    return {error: true, message: error, data: {}};
  }
}

/**
 * removeMovies_Service
 * @function removeMovies_Service services remove movies
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @example * var payload = { moviesId:213123 }; *
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
async function removeMovies_Service(payload) {
  try {
    let res = await removeMovies_Spec(payload);
    if (!res.error) {
      res.data.status = "inactive";
      res = await updateStatusMovies_Module(res.data);
    }
    return {...res};
  } catch (error) {
    console.log(error);
    return {error: true, message: error, data: {}};
  }
}

module.exports = {
  getMovies_Service,
  detailMovies_Service,
  addMovies_Service,
  editMovies_Service,
  updateStatusMovies_Service,
  removeMovies_Service,
};
