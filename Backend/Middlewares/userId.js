exports.userAuth = async (req, res, next) => {
  const userData = {
    Name: "Nishant",
    Occupation: "Javascript Developer",
  };
  req.user = userData;
  next();
};
