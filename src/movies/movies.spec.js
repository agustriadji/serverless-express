const Joi = require("joi");

const item = {
  moviesId: Joi.number().positive().allow(null),
  title: Joi.string().invalid("", null).required(),
  description: Joi.string().allow(null),
  rating: Joi.number().default(0).min(0).required(),
  image: Joi.string().default(""),
  status: Joi.string().allow("active", "inactive").default("active"),
};
const schemaItem = Joi.object().keys(item).required();

const schemaStatusItem = Joi.object().keys({moviesId: item.moviesId, status: item.status});

const schemaID = Joi.object().keys({moviesId: item.moviesId});

/**
 * addMovies_Spec
 * add movies
 * @param {object} payload
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @param {string} payload.status optional default active
 * @example * var payload = { title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.addMovies_Spec = async (payload) => {
  let {value, error} = schemaItem.validate(payload);
  value = {
    ...value,
    rating: parseFloat(value.rating),
  };
  return {message: error ? error : "ok", error: error ? true : false, data: value};
};

/**
 * editMovies_Spec
 * edit movies by id
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @example * var payload = { moviesId:123, title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.editMovies_Spec = async (payload) => {
  let {value, error} = schemaItem.validate(payload);
  value = {
    ...value,
    rating: parseFloat(value.rating),
  };
  return {message: error ? error : "ok", error: error ? true : false, data: value};
};

/**
 * updateStatusMovies_Spec
 * update Status movies by id
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.status is required
 * @example * var payload = { moviesId: 1234, status: 'active|inactive' }; *
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.updateStatusMovies_Spec = async (payload) => {
  let {value, error} = schemaStatusItem.validate(payload);
  value = {
    ...value,
    moviesId: parseFloat(value.moviesId),
  };
  return {message: error ? error : "ok", error: error ? true : false, data: value};
};

/**
 * detailMovies_Spec
 * get all movies or by id
 * @param {string} moviesId optional
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.detailMovies_Spec = async (payload) => {
  let {value, error} = schemaID.validate(payload);
  value = {
    moviesId: Number(value.moviesId),
  };
  return {message: error ? error : "ok", error: error ? true : false, data: value};
};

/**
 * removeMovies_Spec
 * get all movies or by id
 * @param {string} moviesId is required
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.removeMovies_Spec = async (payload) => {
  let {value, error} = schemaID.validate(payload);
  value = {
    moviesId: Number(value.moviesId),
  };
  return {message: error ? error : "ok", error: error ? true : false, data: value};
};
