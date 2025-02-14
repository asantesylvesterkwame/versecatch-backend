const createTrips = {
    requestId: {
      notEmpty: true,
      errorMessage: "requestId cannot be empty",
    },
    assignedDriver: {
      notEmpty: true,
      errorMessage: "riderId cannot be empty",
    },
    trackingInfo: {
      notEmpty: true,
      errorMessage: "tracking Info cannot be empty",
    },
    
  };
  
  module.exports = { createTrips };
  