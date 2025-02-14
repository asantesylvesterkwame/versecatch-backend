const externalTransaction = {
  email: {
    notEmpty: true,
    errorMessage: "email cannot be empty",
  },
  amount: {
    notEmpty: true,
    errorMessage: "amount cannot be empty",
  },
  paymentFor: {
    notEmpty: true,
    errorMessage: "paymentFor cannot be empty",
  },
  userType: {
    notEmpty: true,
    errorMessage: "userType cannot be empty",
  },
  channel: {
    notEmpty: true,
    errorMessage: "channel cannot be empty",
  },
  requestId: {
    notEmpty: true,
    errorMessage: "requestId cannot be empty",
  },
};

module.exports = {
  externalTransaction,
};
