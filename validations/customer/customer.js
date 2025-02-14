const createCustomer = {
  fullName: {
    notEmpty: true,
    errorMessage: "fullName cannot be empty",
  },
  phoneNumber: {
    notEmpty: true,
    errorMessage: "phoneNumber cannot be empty",
  },
  
};


module.exports = {
  createCustomer
};
