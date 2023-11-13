import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactsSlice';
import { authReducer } from './Auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: authReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
