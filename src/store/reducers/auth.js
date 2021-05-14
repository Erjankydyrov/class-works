const initialState = true;

export default (state = initialState, action) => {
  if (action.type == "TOGGLE") {
    return !state;
  }
  return state;
};