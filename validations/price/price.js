const createPrice = {

    costPerKilometer: {
        notEmpty: true,
        errorMessage: "cost per kilometer cannot be empty",
      },
    //expressPrice,
    adminId: {
        notEmpty: true,
        errorMessage: "admin Id cannot be empty",
  }
  };
  
  module.exports = { createPrice };
  