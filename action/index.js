// import axios from "axios";

// const API_URL = "http://localhost:3005/streams";

// // Action to fetch streams
// export const fetchStreams = () => async (dispatch) => {
//   const response = await axios.get(API_URL);
//   dispatch({ type: "FETCH_STREAMS", payload: response.data });
// };

// // Action to create a new stream
// export const createStream = (stream) => async (dispatch) => {
//   const response = await axios.post(API_URL, stream);
//   dispatch({ type: "CREATE_STREAM", payload: response.data });
// };

import axios from "axios";

const API_URL = "http://localhost:3005/streams";

// Action to fetch streams
export const fetchStreams = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

// Action to create a new stream
export const createStream = (stream) => async (dispatch) => {
  const response = await axios.post(API_URL, stream);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};

// Action to edit a stream
export const editStream = (id, updates) => async (dispatch) => {
  const response = await axios.patch(`${API_URL}/${id}`, updates);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};

// Action to delete a stream
export const deleteStream = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
};
