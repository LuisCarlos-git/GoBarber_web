import { combineReducers } from 'redux';

import auth from './auth/Reducer';
import user from './user/Reducer';

export default combineReducers({
  auth,
  user,
});
