const createRider = {
  email: {
    notEmpty: true,
    errorMessage: "email cannot be empty",
  },
  userName: {
    notEmpty: true,
    errorMessage: "userName cannot be empty",
  },
  phoneNumber: {
    notEmpty: true,
    errorMessage: "phoneNumber cannot be empty",
  },
};

module.exports = {
  createRider,
};
