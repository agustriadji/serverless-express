module.exports = async function (state = null) {
  if (!state) {
    state = {
      message: 'cannot read payload',
      data: null,
      error: 400,
    };
  }

  const {message, data, error} = state;

  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: error ? 400 : 200,
    body: JSON.stringify(
      {
        message,
        data,
        error,
      },
      null,
      2
    ),
  };
};
