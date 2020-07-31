const initialState = {
    token : localStorage.getItem('accessToken'),
    listState : false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTOKEN':
            return {...state, token: action.token.data}
        case 'ADDPOST' :
            return {...state , listState: !initialState.listState}
        case 'DELETEPOST' :
            return {...state , listState: !initialState.listState}
        
        default :
            return state
    }
  };