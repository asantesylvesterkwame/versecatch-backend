const createRating = {
  rating: {
    notEmpty: true,
    errorMessage: "rating cannot be empty",
  },
  comment: {
    notEmpty: true,
    errorMessage: "comment cannot be empty",
  },
  riderId: {
    notEmpty: true,
    errorMessage: "riderId cannot be empty",
  },
};

module.exports = {
  createRating,
};
