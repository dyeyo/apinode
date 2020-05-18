const convertEmptyStringsToNull = (req, res, next) => {
  const body = { ...req.body };

  Object.keys(body).forEach((key) => {
    if (body[key] === null || body[key] === undefined || body[key] === '') {
      body[key] = null;
    }
  });

  req.body = body;
  next();
};

module.exports = convertEmptyStringsToNull;
