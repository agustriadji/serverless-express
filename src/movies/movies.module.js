const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();
let response = {error: false, message: "ok", data: []};

/**
 * getMovies_Module
 * @function getMovies_Module module for get movies
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
exports.getMovies_Module = async function () {
  try {
    let result = []; // result for prisma
    result = await prisma.movie.findMany({
      where: {
        AND: [
          {
            "status": "active",
          },
        ],
      },
    });
    console.log(result, "8899");
    response.data = result; // store to response data
  } catch (e) {
    console.error(e.meta, "::getMovies_Module");
    response.error = true;
    response.message = "failed get data";
  }
  console.log("8899");
  return {...response};
};

/**
 * detailMovies_Module
 * @function detailMovies_Module module for get detail movies
 * @param {string} moviesId required
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
exports.detailMovies_Module = async function (moviesId) {
  try {
    let result = []; // result for prisma
    result = await prisma.movie.findMany({
      where: {
        AND: [
          {
            id: moviesId,
          },
          {
            "status": "active",
          },
        ],
      },
    });

    response.data = result; // store to response data
  } catch (e) {
    console.error(e.meta, "::detailMovies_Module");
    response.error = true;
    response.message = "failed get detail data";
  }

  return {...response};
};

/**
 * addMovies_Module
 * @function addMovies_Module module for add movies
 * @param {object} payload
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @param {string} payload.status optional default active
 * @example * var payload = { title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 * @returns {Promise<{message: string, error: boolean, data: object}>}
 */
exports.addMovies_Module = async function (payload) {
  try {
    let result = [];

    result = await prisma.movie.create({
      data: payload,
    });
    response.data = result;
  } catch (e) {
    console.error(e, "::addMovies_Module");
    response.error = true;
    response.message = "failed add data";
  }
  return {...response};
};

/**
 * editMovies_Module
 * @function editMovies_Module module for edit movies
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.title
 * @param {string} payload.description allow null
 * @param {number} payload.rating default 0
 * @param {string} payload.image default ''
 * @example * var payload = { moviesId:123, title: "Transformers", description: "This description movie", rating:8.0, image:"path/bucket" }; *
 */
exports.editMovies_Module = async function (payload) {
  try {
    let result = [];
    const id = payload.moviesId;

    delete payload.moviesId;

    result = await prisma.movie.update({
      data: payload,
      where: {id},
    });
    response.data = result;
  } catch (e) {
    console.error(e.meta, "::editMovies_Module");
    response.error = true;
    response.message = "Data not found";
  }
  return {...response};
};

/**
 * updateStatusMovies_Module
 * @function updateStatusMovies_Module module for update status movies
 * @param {object} payload
 * @param {string} payload.moviesId is required
 * @param {string} payload.status optional default active
 * @example * var payload = { moviesId: "1234", status:'active|inactive' }; *
 * @returns {Promise<{error: boolean,message:'ok|success', data:object }>}
 */
exports.updateStatusMovies_Module = async function (payload) {
  try {
    let result = [];
    const id = payload.moviesId;

    delete payload.moviesId;

    result = await prisma.movie.update({
      data: payload,
      where: {id},
    });
    response.data = result;
  } catch (e) {
    console.error(e.meta, "::updateStatusMovies_Module");
    response.error = true;
    response.message = "data not found";
  }
  console.log(response);
  return {...response};
};
