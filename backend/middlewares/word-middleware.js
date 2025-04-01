const wordMiddleware = (req, res, next) => {
    req.index = 6;
    next();
};

module.exports = {
  wordMiddleware,
};
