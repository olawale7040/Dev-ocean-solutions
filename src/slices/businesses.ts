import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { businessProps } from "src/utils/models"
import { Dispatch } from 'src/store';


type Actions = {
  businesses: businessProps[];
  businessDetails: businessProps | null,
  nearbyPlaces: businessProps[];
  error: any;

}
const initialState: Actions = {
  businesses: [],
  businessDetails: null,
  nearbyPlaces: [],
  error: null
};

const slice = createSlice({
  name: "businesses",
  initialState,
  reducers: {
    fetchBusinesses(state, action) {
      const { payload } = action;
      state.businesses = payload;
    },
    viewBusiness(state, action) {
      const { payload } = action;
      const currentState = current(state)
      const selectedBusiness = currentState.businesses.find(item => item.id === payload);
      state.businessDetails = selectedBusiness ? selectedBusiness : null;
      // Find Nearby Places of Selected Business
      const nearbyPlaces = currentState.businesses.filter(item => item.address.city === selectedBusiness?.address.city && item.id !== payload);
      state.nearbyPlaces = nearbyPlaces;
    },
    createError(state, action) {
      state.error = action.payload
    }
  },
});

export const reducer = slice.reducer;
export const { viewBusiness } = slice.actions;

export const fetchBusinesses = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(
      `https://api.jsonbin.io/b/6231abada703bb67492d2b8f`
    );
    if (response.status === 200) {
      dispatch(slice.actions.fetchBusinesses(response.data));
    }
    else {
      // Error Handling
      dispatch(slice.actions.createError(response.data));
      return response.data;
    }
  } catch (err: any) {
    // Error Handling
    dispatch(slice.actions.createError(err.message));
    return err.message;
  }
};
