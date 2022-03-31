import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { businessProps } from "src/utils/models"
import { Dispatch } from 'src/store';


type Actions = {
  businesses: businessProps[];
}
const initialState: Actions = {
  businesses: [],
};

const slice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    fetchBusinesses(state, action) {
      const { payload } = action;
      state.businesses = payload;
    },
  },
});

export const reducer = slice.reducer;
// export const { } = slice.actions;

export const fetchBusinesses = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      `https://api.jsonbin.io/b/6231abada703bb67492d2b8f`
    );
    console.log(response, "response");
    if (response.status === 200) {
      dispatch(slice.actions.fetchBusinesses(response.data));
    }
  } catch (err: any) {
    return err.message;
  }
};
