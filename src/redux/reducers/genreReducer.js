const initialState = {

};

const genreReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'X':
            return state;
        case 'Y':
            return state;
        case 'Z':
            return state;
        default:
            return state;
    }
};

export default genreReducer;