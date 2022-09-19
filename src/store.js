import { configureStore, createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: { contactsList: [{ name: "balaji" }] },
  reducers: {
    addItemToContactsList(state, action) {
      const name = action.payload.userName;
      const existingName = state.contactsList.find(
        (each) => each.name === name
      );
      console.log(existingName);

      if (existingName === undefined) {
        state.contactsList.push({
          name: action.payload.userName,
          email: action.payload.userEmail,
          phoneNo: action.payload.userNumber
        });
      }
    }
  }
});

export const contactActions = contactSlice.actions;
const store = configureStore(contactSlice);
export default store;
