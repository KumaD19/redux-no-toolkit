const initialState = {
  cart: [],
};

const productsReducer = (state = initialState, action) => {
  // switch case depending on type of action
  switch (action.type) {
    //adds a product to our cart
    case "ADD_CART":
      //We check for exisiting Items in our cart by using their product id
      //action.payload.id carries data of id we are trying to add (data we want to use for this action)
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          //we update cart property, and set our new items based on the following condition
          //if payload  matches we keep all past properties of our item the same and only set our new item quantity
          //otherwise nothing changes
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        //we add our current cart state and append a new object and set its quantity while using our new payload
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    //removes products from our cart
    case "REMOVE_CART":
      return {
        ...state,
        //we filter out any item that isnt equal to our payload and add it to our new array
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    //handles our product increments
    case "INCREMENT_ITEM":
      return {
        ...state,
        //set new cart array, maps over each item if our action.payload matches we set quantity otherwise just add the item
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    //handles decrements from our products
    case "DECREMENT_ITEM":
      return {
        ...state,
        //sets new array if id matches sets item with its new quantity value if it reaches 0 deletes it from cart
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    default:
      return state;
  }
};

export default productsReducer;
