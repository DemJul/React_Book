import { combineReducers } from 'redux';
import filtersReducers from './filters';
import booksReducer from './books';

export const rootReducer = combineReducers({
    filters: filtersReducers,
    books: booksReducer,
})

  