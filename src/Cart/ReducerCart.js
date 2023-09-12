let initialState = [];

const ReducerCart = (state = initialState, action) => {
  console.log(state, action);

  if (action.type === "add") {
    let newItem = action.payload;
    let newState = [...state, newItem];
    return newState;
  }
  if (action.type === "delete") {
    let indx = action.payload;
    let newState = state.filter((val, index) => indx !== index);
    return newState;
  }
  if (action.type === "reset") {
    return [];
  }
  if (action.type === "show") {
    return state;
  }
  if (action.type === "increase") {
    const newState = state.map((val, i) => {
      if (i === action.payload) {
        return {
          ...val,
          ["quantity"]: val.quantity + 1,
        };
      } else return val;
    });

    console.log(newState);
    return newState;
  }
  if (action.type === "decrease") {
    if (state[action.payload].quantity === 1) {
      const newState = state.filter((val, indx) => indx !== action.payload);
      return newState;
    } else {
      const newState = state.map((val, i) => {
        if (i === action.payload) {
          return {
            ...val,
            ["quantity"]: val.quantity - 1,
          };
        } else return val;
      });
      return newState;
    }
  }

  return state;
};
export default ReducerCart;
