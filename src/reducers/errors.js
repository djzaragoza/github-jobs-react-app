const errorsReducers = (state = [], action) => {
   switch (action.type) {

      case 'SET_ERRORS':
         return {
            error: action.error
         };
      case 'RESET_ERRORS':
         return {};
      default:
         return state;
   }
};

export default errorsReducers;

// in this file, we are adding the API error if any into the redux store by dispatching SET_ERRORS action
// and removing the error object from redux store if there is no error while getting a response from API by 
// dispatching RESET_ERRORS action.