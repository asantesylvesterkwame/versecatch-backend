const createRequest = {
  title:{
    notEmpty: true,
    errorMessage: "title cannot be empty",
  },
  customerId: {
    notEmpty: true,
    errorMessage: "customerId cannot be empty",
  },
  userType: {
    notEmpty: true,
    errorMessage: "userType cannot be empty",
  },
  createdBy: {
    notEmpty: true,
    errorMessage: "createdBy cannot be empty",
  },
  receiverName: {
    notEmpty: true,
    errorMessage: "receiverName cannot be empty",
  },
  receiverPhone: {
    notEmpty: true,
    errorMessage: "Phone Number cannot be empty",
    isLength: {
      errorMessage:
        "Phone Number should be at least 11 digits long(starting with +234)",
      options: { min: 11 },
    },
  },
  deliveryAddress: {
    notEmpty: true,
    errorMessage: "deliveryAddress cannot be empty",
  },
  pickUpDate: {
    notEmpty: true,
    errorMessage: "pickUpDate cannot be empty",
  },
  paymentMethod: {
    notEmpty: true,
    errorMessage: "paymentMethod cannot be empty",
  },
  paymentType: {
    notEmpty: true,
    errorMessage: "paymentType cannot be empty",
  },
  requestType: {
    notEmpty: true,
    errorMessage: "requestType cannot be empty",
  }

};

module.exports = {
  createRequest,
};
