import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import currentSelectionsReducer from './currentSelectionsReducer';

export default combineReducers({
  search: searchReducer,
  currentSelections: currentSelectionsReducer
});
