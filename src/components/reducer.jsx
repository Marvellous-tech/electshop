const calculateSubtotal = (basket) => {
    return basket.reduce((total, item) => total + parseFloat(item.subtotal), 0);
};

export const initialState = {
    basket: [],
    subtotal: 0.0,
    user: null
};

export const actionTypes = {
    SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
    console.log('Reducer action:', action);
    
    switch(action.type) {
        case "ADD_TO_BASKET": {
            const existingIndex = state.basket.findIndex(item => item.id === action.item.id);
            const newBasket = [...state.basket];
            
            if (existingIndex >= 0) {
                // Increment quantity if item exists
                const existingItem = newBasket[existingIndex];
                newBasket[existingIndex] = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    subtotal: (existingItem.price * (existingItem.quantity + 1)).toFixed(2)
                };
            } else {
                // Add new item with initial quantity
                newBasket.push({
                    ...action.item,
                    quantity: 1,
                    subtotal: parseFloat(action.item.price)
                });
            }
            return {
                ...state,
                basket: newBasket, 
                subtotal: calculateSubtotal(newBasket)
            };
        }

        case "UPDATE_SUBTOTAL":
          return { ...state, subtotal: action.payload };

        case 'REMOVE_FROM_BASKET': {
            const index = state.basket.findIndex(item => item.id === action.id);
            if (index === -1) {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`);
                return state;
            }
        
            const newBasket = [...state.basket];
            const item = newBasket[index];
        
            if (item.quantity > 1) {
                // Decrement quantity if item exists and quantity is greater than 1
                newBasket[index] = {
                    ...item,
                    quantity: item.quantity - 1,
                    subtotal: (item.price * (item.quantity - 1)).toFixed(2)
                };
            } else {
                // Remove item if quantity is 1
                newBasket.splice(index, 1);
            }
        
            // const newSubtotal = newBasket.reduce((total, item) => total + parseFloat(item.subtotal), 0);
            return {
                ...state,
                basket: newBasket,
                subtotal: calculateSubtotal(newBasket),
            };
        }
        case 'UPDATE_QUANTITY':
            const itemIndex = state.basket.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
              const item = state.basket[itemIndex];
              const newBasket = state.basket.map((basketItem, index) =>
                index === itemIndex
                  ? {
                      ...basketItem,
                      quantity: Math.max(1, action.payload.newQuantity),
                      subtotal: (basketItem.price * action.payload.newQuantity).toFixed(2),
                    }
                  : basketItem
              );
              return {
                ...state,
                basket: newBasket,
                subtotal: calculateSubtotal(newBasket),
              };
            } else {
                console.error(`Item not found in basket with id: ${action.payload.id}`);
                return state;
            }
        
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            console.warn(`Unhandled action type: ${action.type}`);
            return state;
    }
};

export default reducer;