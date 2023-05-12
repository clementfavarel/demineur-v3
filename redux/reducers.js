import { SET_PDC, SET_K } from "./actions";

const initialState = {
    PdC: 80,
    K: 0.5,
};

function crReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PDC:
            return {
                ...state,
                PdC: action.payload,
            };
        case SET_K:
            return {
                ...state,
                K: action.payload,
            };
        default:
            return state;
    }
}

export default crReducer;
