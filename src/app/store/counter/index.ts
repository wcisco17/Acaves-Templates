import { dispatch } from 'app/store';

export type ICounterAction =
    | { type: "increment" }
    | { type: "decrement" };

export const counterState = 0;

export type ICState = typeof counterState;

export const counterReducer = (
    state: ICState = counterState,
    action: ICounterAction
) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

export const increment = () => dispatch({
    type: 'increment'
});

export const decrement = () => dispatch({
    type: 'decrement'
});