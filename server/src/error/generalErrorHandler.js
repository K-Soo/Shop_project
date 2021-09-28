const generalErrorHandler = (err, req, res, next) => {
  console.error('generalErrorHandler', err);
  const message = err.message;
  const statusCode = err.statusCode;
  res.status(statusCode || 500).json({ message });
}


export default generalErrorHandler