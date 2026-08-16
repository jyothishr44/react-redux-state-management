const initialState = {
  cartCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartCount: state.cartCount + 1,
      };

    case "REMOVE_FROM_CART":
      return {
        cartCount: state.cartCount ? state.cartCount - 1 : 0,
      };

    default:
      return state;
  }
};

export default reducer;
