
export function updateForm(data) {
  return {
    type: 'UPDATE_FORM',
    value : data
  };
}

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// }
