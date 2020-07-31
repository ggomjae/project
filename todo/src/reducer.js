const initialState = {
    token : localStorage.getItem('accessToken')
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTOKEN':
            return {...state, token: action.token.data}
        default :
          return state
    }
  };