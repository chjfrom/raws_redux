const login = (data)=> { // 비동기처리
    return (dispatch,getState) => {
        dispatch(loginRequest(data));
        try {
            setTimeout(()=> {
                dispatch(loginSuccess({
                    userId : 1,
                    name : 'code'
                }))
            },3000)
        } catch (e) {
            dispatch(loginFailure((e)))
        }
        
    }
}

const loginRequest = (data) => { // 동기처리)
    return { // action
      type: 'LOG_IN_REQUEST',
      data
    };
};

const loginSuccess = (data) => { // 동기처리)
    return { // action
      type: 'LOG_IN_SUCCESS',
      data,
    };
};

const loginFailure = (data) => { // 동기처리)
    return { // action
      type: 'LOG_IN_FAILURE',
      data,
    };
};


//action 생성함수 (동기처리)
// const login = (data) => {
//     return { // action
//       type: 'LOG_IN',
//       data,
//     };
//   };
  
  const logOut = () => {
      return { // action
          type: 'LOG_OUT',
      };
  };
  

  module.exports = {
      logOut,
      login,
  }