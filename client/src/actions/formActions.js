import { SUBMIT_FORM, FORM_ERROS } from "./types";

export const submitForm = data => async dispatch => {
  try {
    const res = await fetch("api/form", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: SUBMIT_FORM,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: FORM_ERROS,
      payload: err.response.data
    });
  }
};
