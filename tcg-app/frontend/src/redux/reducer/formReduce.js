import {
    GET_LEARNER,
    ADD_LEARNER,
    DELETE_LEARNER,
    EDIT_LEARNER,
    COMPLETED,
  } from './rootReducer';
  
  const initialState = {
    form: [],
  };
  export const formReduce = (state = initialState, action) => {
    switch (action.type) {
      case GET_LEARNER:
        return {
          ...state,
          form: action.payload,
        };
      case ADD_LEARNER:
        return {
          ...state,
          form: [...state.form, action.payload],
        };
      case DELETE_LEARNER:
        return {
          ...state,
          form: state.form.filter((learner) => learner.id !== action.payload),
        };
      case EDIT_LEARNER:
        const { id, edit } = action.payload;
        return {
          ...state,
          form: state.form.map((learner) => {
            if (learner.id === id) {
              return {
                ...learner,
                progress: edit,
              };
            }
            return learner;
          }),
        };
      case COMPLETED:
        return state;
      default:
        return state;
    }
  };