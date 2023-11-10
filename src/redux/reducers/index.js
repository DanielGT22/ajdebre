const initialState = {
    selectedAlbum: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_ALBUM':
        return {
          ...state,
          selectedAlbum: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  