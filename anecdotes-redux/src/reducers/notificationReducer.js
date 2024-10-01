import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",

  initialState: {
    message: null,
    timeoutId: null,
  },

  reducers: {
    show: (state, { payload }) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }

      state.message = payload;
    },

    hide: (state) => {
      state.message = null;
    },

    setTimerId: (state, { payload }) => {
      state.timeoutId = payload;
    },
  },
});

const { show, hide, setTimerId } = notificationSlice.actions;

export const showNotification =
  (message, timeSec = 5) =>
  (dispatch) => {
    const timeMs = timeSec * 1000;

    dispatch(show(message));
    const timeoutId = setTimeout(() => dispatch(hide()), timeMs);
    dispatch(setTimerId(timeoutId));
  };

export default notificationSlice.reducer;
