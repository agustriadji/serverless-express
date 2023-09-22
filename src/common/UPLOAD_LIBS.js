module.exports = async (Request, Response, setupMulter) => {
  return new Promise((resolve, reject) => {
    setupMulter(Request, Response, async (err) => {
      return resolve({
        file: Request.file,
        body: Request.body,
        params: Request.params,
        query: Request.query,
      });
    });
  });
};
