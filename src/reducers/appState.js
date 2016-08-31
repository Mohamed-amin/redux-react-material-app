const initState = {
	formData:{}
};
export default function counter(state = initState, action) {
  switch (action.type) {
  case 'UPDATE_FORM':
    return {
		...state,
		formData: { ...state.formData, ...action.value}
    }
  default:
    return state;
  }
}
