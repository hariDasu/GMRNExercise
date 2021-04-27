import * as types from "../types";
import { Action } from "redux";


// type UserAuth = {
//   token_type: string;
//   refresh_token: string;
//   access_token: string;
//   expires_in: string;
// };

// interface AuthAppState {
//   user: UserAuth;
//   loggingIn: boolean;
//   loggedIn: boolean;
//   error: Object | null;
// }

// interface UserAppState {
//   user: Member;
//   fetchingUser: boolean;
//   error: Object;
// }

const initialRecordsState = {
  records: {},
  sucess: null,
  error: null,
  isLoading: null
};

export const records = (
  state = initialRecordsState,
  action: Action
) => {
  switch (action.type) {
    case types.recordTypes.RECORDS_REQUEST:
      return {
        ...state,
        success: false,
        error: false,
        isLoading: true,
      };
    case types.recordTypes.RECORDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        error: false,
        records: action.records,
      };

    case types.recordTypes.RECORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
      };
    
    default:
      return state;
  }
};
