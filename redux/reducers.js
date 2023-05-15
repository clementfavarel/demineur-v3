import {
    SET_PDC,
    SET_K,
    SET_TAILLE_ECHELLE_CARTE,
    SET_TAILLE_MESUREE,
    SET_TAILLE_REELLE,
    SET_TAILLE_CARTE,
} from "./actions";

const initialState = {
    PdC: 80,
    K: 0.5,
    tailleEchelleCarte: 100,
    tailleMesuree: 5,
    tailleReelle: 8.6,
    tailleCarte: 2.5,
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
        case SET_TAILLE_ECHELLE_CARTE:
            return {
                ...state,
                tailleEchelleCarte: action.payload,
            };
        case SET_TAILLE_MESUREE:
            return {
                ...state,
                tailleMesuree: action.payload,
            };
        case SET_TAILLE_REELLE:
            return {
                ...state,
                tailleReelle: action.payload,
            };
        case SET_TAILLE_CARTE:
            return {
                ...state,
                tailleCarte: action.payload,
            };
        default:
            return state;
    }
}

export default crReducer;
