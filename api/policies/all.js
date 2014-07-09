module.exports = function(req, res, next) {
  res.locals.homepage = false;
  return next();
};
