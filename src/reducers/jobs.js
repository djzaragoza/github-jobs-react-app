const jobsReducer = (state = [], action) => {
   switch (action.type) {
      case 'SET_JOBS':
         return action.jobs;
      case 'LOAD_MORE_JOBS':
         return [...state, ...action.jobs]; // spread operator
      default:
         return state;
   }
};

export default jobsReducer;

// in this file, we are adding the new jobs data coming from the API in redux using SET_JOBS action and using
// LOAD_MORE_JOBS action we are getting more jobs and adding it to already existing jobs array using the spread operator

