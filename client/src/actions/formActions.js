import { SUBMIT_FORM, FORM_ERROS } from "./types";
import axios from "axios";

export const submitForm = newformdata => async dispatch => {
  const config = {
    header: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/form",
      newformdata,
      config
    );

    dispatch({
      type: SUBMIT_FORM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORM_ERROS,
      payload: err.response.msg
    });
  }
};
