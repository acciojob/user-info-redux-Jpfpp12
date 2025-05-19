const initialState = {
  name: '',
  email: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
