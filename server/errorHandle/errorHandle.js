const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  handleError: function handleError(error, req, res, next) {
    console.log(error);
    //
    let returnError = {
      // createdAt: new Date(),
      errorName: error?.name,
      message: error.message,
      status: error?.status, //undef for if(error.request)
      statusText: error?.statusText, //undef for if(error.request)
      config: error.config,
      stack: error?.stack,
    };
    if (NODE_ENV === "production") {
      delete returnError.stack;
    }
    try {
      if (error.response) {
        // The request was made but no response was received
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);

        returnError = {
          ...returnError,
          message: error.response.data,
          status: error.response?.status,
          statusText: error.response?.statusText,
          config: error.response.config,
        };

        return res.status(500).json(returnError);
        //
      } else if (error.request) {
        // The request was made but no response was received
        // console.log("Error-", error.config);
        // console.log("Error-", error.stack);

        return res.status(500).json(returnError);
        //
      } else {
        // The request was made but no response was received
        // Something happened in setting up the request that triggered an Error
        // console.log("Error-", error.config);

        return res.status(500).json(returnError);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
