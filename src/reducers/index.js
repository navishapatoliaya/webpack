import { combineReducers } from "redux";
import { authentication } from "./authenticationreducer";
import {registration} from "./registrationreducer";
import { users } from "./usersreducer";
import{alert} from "./alertreducers";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
  });
  
  export default rootReducer;