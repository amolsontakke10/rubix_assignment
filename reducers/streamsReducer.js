// const initialState = [];

// const streamsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_STREAMS":
//       return action.payload;
//     case "CREATE_STREAM":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default streamsReducer;

const initialState = [];

const streamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return action.payload;
    case "CREATE_STREAM":
      return [...state, action.payload];
    case "EDIT_STREAM":
      return state.map((stream) =>
        stream.id === action.payload.id ? action.payload : stream
      );
    case "DELETE_STREAM":
      return state.filter((stream) => stream.id !== action.payload);
    default:
      return state;
  }
};

export default streamsReducer;
