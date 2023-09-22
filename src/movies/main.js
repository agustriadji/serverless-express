"use strict";

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const {
  getMovies_Service,
  detailMovies_Service,
  addMovies_Service,
  editMovies_Service,
  updateStatusMovies_Service,
  removeMovies_Service,
} = require("./movies.service");
const UPLOAD_LIBS = require("../common/UPLOAD_LIBS");

/**
 * @function getMovies_Service  function for get movies list
 * @method GET
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.getMovies_Main = async (Request, Response, Next) => {
  const result = await getMovies_Service();
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * @function detailMovies_Service  function for get detail movies by id
 * @method GET
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.detailMovies_Main = async (Request, Response, Next) => {
  const result = await detailMovies_Service(Request.params);
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * @function addMovies_Main  function for add movies
 * @method POST
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.addMovies_Main = async (Request, Response, Next) => {
  const payload = await UPLOAD_LIBS(Request, Response, uploaded);
  if (payload.file) {
    payload.body.image = path.join(process.env.APP_URL, payload.file.path);
  }

  const result = await addMovies_Service(payload.body);
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * @function editMovies_Main  function for edit movies by id
 * @param {*} event
 * @method PUT
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.editMovies_Main = async (Request, Response, Next) => {
  const payload = await UPLOAD_LIBS(Request, Response, uploaded);
  if (payload.file) {
    payload.body.image = path.join(process.env.APP_URL, payload.file.path);
  }
  let data = {...payload.params, ...payload.body};
  const result = await editMovies_Service(data);
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * @function upateStatusMovies_Main  function for update status movies
 * @param {*} event
 * @method PUT
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.upateStatusMovies_Main = async (Request, Response, Next) => {
  let data = {...Request.params, ...Request.body};
  const result = await updateStatusMovies_Service(data);
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * @function removeMovies_Main  function for remove movies
 * @param {*} event
 * @method DELETE
 * @param {object} Request Request data express
 * @param {object} Response Response data express
 * @param {object} Next Callback data express
 * @returns {Promise<*>} API Response { message, error, data }
 */
exports.removeMovies_Main = async (Request, Response, Next) => {
  const result = await removeMovies_Service(Request.params);
  return Response.status(result.error ? 400 : 200).json(result);
};

/**
 * Common
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let paths = "./public/movie-resources";
    if (!fs.existsSync(paths)) {
      fs.mkdirSync(paths);
    }
    cb(null, paths);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let uploaded = multer({storage, limits: {fileSize: 24000000}}).single("image");
