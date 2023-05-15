export const SET_PDC = "SET_PDC";
export const SET_K = "SET_K";
export const SET_TAILLE_ECHELLE_CARTE = "SET_TAILLE_ECHELLE_CARTE";
export const SET_TAILLE_MESUREE = "SET_TAILLE_MESUREE";
export const SET_TAILLE_REELLE = "SET_TAILLE_REELLE";
export const SET_TAILLE_CARTE = "SET_TAILLE_CARTE";

export const setPdC = (PdC) => (dispatch) => {
    dispatch({
        type: SET_PDC,
        payload: PdC,
    });
};

export const setK = (K) => (dispatch) => {
    dispatch({
        type: SET_K,
        payload: K,
    });
};

export const setTailleEchelleCarte = (tailleEchelleCarte) => (dispatch) => {
    dispatch({
        type: SET_TAILLE_ECHELLE_CARTE,
        payload: tailleEchelleCarte,
    });
};

export const setTailleMesuree = (tailleMesuree) => (dispatch) => {
    dispatch({
        type: SET_TAILLE_MESUREE,
        payload: tailleMesuree,
    });
};

export const setTailleReelle = (tailleReelle) => (dispatch) => {
    dispatch({
        type: SET_TAILLE_REELLE,
        payload: tailleReelle,
    });
};

export const setTailleCarte = (tailleCarte) => (dispatch) => {
    dispatch({
        type: SET_TAILLE_CARTE,
        payload: tailleCarte,
    });
};
