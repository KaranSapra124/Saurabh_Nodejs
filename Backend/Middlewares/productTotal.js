const arr = [10, 20, 400, 250, 100];

exports.getTotal = (req, res, next) => {
  const total = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  req.totalVal = +total;
  next();
};
