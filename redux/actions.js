export const SET_PDC = "SET_PDC";
export const SET_K = "SET_K";

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
