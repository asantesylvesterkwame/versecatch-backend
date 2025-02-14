module.exports.createPerformanceScoreCard = {
    reason: {
      notEmpty: true,
      errorMessage: "Reason cannot be empty",
    },
    amount: {
      notEmpty: true,
      errorMessage: "amount cannot be empty",
    },
    // riderId: {
    //     notEmpty: true,
    //     errorMessage: "riderId cannot be empty",
    //   }, 
    actionType: {
        notEmpty: true,
        errorMessage: "actionType cannot be empty",
      },
    
  };
  