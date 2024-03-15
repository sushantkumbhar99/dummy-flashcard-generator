// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import flashcardsReducer from '../store/flashcardsSlice';
import termsReducer from '../store/termsSlice';

const rootReducer = combineReducers({
  flashcards: flashcardsReducer,
  terms: termsReducer,
});

export default rootReducer;
