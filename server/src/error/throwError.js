const DEFAULT_HTTP_STATUS_MESSAGES = {
  400: 'Bad Requests',
  401: 'Unauthorized',
  403: 'Foribdden',
  404: 'Not Found',
  409: 'duplicate',
  500: 'Internal Server Error',
  503: 'Temporary Unavailable',
};

 const throwError = ({ msg = null, statusCode = 500 }) => {
  const err = new Error(msg ?? DEFAULT_HTTP_STATUS_MESSAGES[statusCode]);
  err.statusCode = statusCode;
  throw err;
}


export default throwError;