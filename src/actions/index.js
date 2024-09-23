export const addCart = (product) => ({
    type: 'ADD_CART',
    payload: product,
  });
  
  export const deleteCart = (productId) => ({
    type: 'REMOVE_CART',
    payload: productId,
  });
  
  export const incrementItem = (productId) => ({
    type: 'INCREMENT_ITEM',
    payload: productId,
  });
  
  export const decrementItem = (productId) => ({
    type: 'DECREMENT_ITEM',
    payload: productId,
  });