import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import AppReducer from '../AppSlice';

export default configureStore({
  reducer: {
    app: AppReducer,
    form: formReducer
  },
});
