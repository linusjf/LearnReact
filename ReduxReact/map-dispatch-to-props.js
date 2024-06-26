const addMessage = (message) => {
  return {
    type: "ADD",
    message: message
  };
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(msg) {
      dispatch(addMessage(msg));
    }
  };
};

export {
  addMessage,
  mapDispatchToProps
};
