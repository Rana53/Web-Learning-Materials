const redux = require('redux');

const BUY_CAKE = 'BUY_CAKE';

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state;
    }
}

const store = redux.createStore(reducer);  
console.log('Initial state ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();