const createTransaction = {
  email: {
    notEmpty: true,
    errorMessage: "email cannot be empty",
  },
  userType: {
    notEmpty: true,
    errorMessage: "userType cannot be empty",
  },
  amount: {
    notEmpty: true,
    errorMessage: "amount cannot be empty",
  },
  paymentFor: {
    notEmpty: true,
    errorMessage: "paymentFor cannot be empty",
  },
};

module.exports = {
  createTransaction,
};
