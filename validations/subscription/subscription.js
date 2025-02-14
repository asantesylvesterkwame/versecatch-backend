const createSubscription = {
  type: {
    notEmpty: true,
    errorMessage: "type cannot be empty",
  },
  amount: {
    notEmpty: true,
    errorMessage: "amount cannot be empty",
  },
  delivery: {
    notEmpty: true,
    errorMessage: "delivery cannot be empty",
  },
  discount: {
    notEmpty: true,
    errorMessage: "discount cannot be empty",
  },
  activeDays: {
    notEmpty: true,
    errorMessage: "activeDays cannot be empty",
  },
};

module.exports = {
  createSubscription,
};
