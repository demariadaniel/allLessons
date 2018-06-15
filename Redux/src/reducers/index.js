const initialState = {
  clicks: 0
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CLICK":
      return {...state, clicks: state.clicks + action.payload}
    default: 
      return state
  }
};

export default rootReducer;