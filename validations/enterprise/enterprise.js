const createEnterprise = {
  email: {
    notEmpty: true,
    errorMessage: "email cannot be empty",
  },
  fullName: {
    notEmpty: true,
    errorMessage: "fullName cannot be empty",
  },
  phoneNumber: {
    notEmpty: true,
    errorMessage: "phoneNumber cannot be empty",
  },
  CACReg: {
    notEmpty: true,
    errorMessage: "CACReg cannot be empty",
  },
};

module.exports = {
  createEnterprise,
};
