const initialState = "";

const filterReducer = (state = initialState, { type, payload }) => {
  if (type === "SET_FILTER") return payload;

  return state;
};

export const changeFilter = (filter) => {
  return {
    type: "SET_FILTER",
    payload: filter,
  };
};

export default filterReducer;
