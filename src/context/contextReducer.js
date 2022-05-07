// reducer  => function that takes in the old state and an action and return a new state 
// creating a reducer
const contextReducer = ( state, action) => {
    let transactions;
    switch (action.type){
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [ action.payload, ...state];
            return transactions;
        default:
            break;
    }
}

export default contextReducer