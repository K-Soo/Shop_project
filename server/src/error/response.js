const DEFAULT_HTTP_STATUS_MESSAGES = {
  200: 'Bad Requests',
  401: 'Unauthorized',
  403: 'Foribdden',
  404: 'Not Found',
  409: 'duplicate',
  500: 'Internal Server Error',
  503: 'Temporary Unavailable',
};

const response = ({ statusCode = 200, mgs = null }) => {
  return res.status(statusCode).json({ message: mgs });
}

export default response;