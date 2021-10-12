const redux = require("redux");

// store initial value
const counterInitialValue = { counter: 0 };

// define reducer which manages the logic according to thereceived actions
const counterReducer = (state = counterInitialValue, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}
	if (action.type === "incrementByAmount") {
		return {
			counter: state.counter + action.payload,
		};
	}
};

// create store and set root reducer
const store = redux.createStore(counterReducer);

// define a user or subscriber of the store
const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

// subscribe a specific subscriber
store.subscribe(counterSubscriber);

// dispatch actions to the reducer
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "incrementByAmount", payload: 5 });
