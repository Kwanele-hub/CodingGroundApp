import axios from "axios";
import {ADD_LEARNER,COMPLETED,DELETE_LEARNER,EDIT_LEARNER,GET_LEARNER} from "../actionTypes/form";

export const getLearner = () => {
  return () => {
    axios.get("http://localhost:4000/api/learner").then((res) => {
      console.log("get", res.data);
      dispatch({
        type: GET_LEARNER,
        payload: res.data,
      });
    });
  };
};

export const addLearner = (form) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/api/learner", { form }).then((res) => {
      dispatch({
        type: ADD_LEARNER,
        payload: res.data,
      });
    });
  };
};

export const deleteLearner = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:4000/api/learner/${id}`).then((res) => {
      dispatch({
        type: DELETE_LEARNER,
        payload: id,
      });
    });
  };
};
export const editLearner = (obj) => {
  const { id, edit } = obj;
  return (dispatch) => {
    axios
      .put(`http://localhost:4000/api/learner/${id}`, { edit })
      .then((res) => {
        dispatch({
          type: EDIT_LEARNER,
          payload: obj,
        });
      });
  };
};
export const completed = (id) => {
  console.log("complete", id);
  return (dispatch) => {
    axios
      .put(`http://localhost:4000/api/learner/complete/${id}`)
      .then((res) => {
        dispatch({
          type: COMPLETED,
        });
      });
  };
};
