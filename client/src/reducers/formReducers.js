import { FORM_ERROS, SUBMIT_FORM } from "../actions/types";

const initialState = {
  formdata: [],
  erorr: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        formdata: [...state.formdata, action.payload]
      };
    case FORM_ERROS:
      return {
        ...state,
        erorr: action.payload
      };
    default: {
      return state;
    }
  }
};
