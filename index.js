const { createStore } = require('redux');

const reducer = (prevState, action) => {
    // 새로운 state 만들어주기
    switch (action.type) {
        case 'CHANGE_TYPE1':
        return {
        ...prevState,
        change1: action.data,
    };
        case 'CHANGE_TYPE2':
        return {
        ...prevState,
        change2: action.data,
    };
        case 'CHANGE_TYPE3':
        return {
        ...prevState,
        change3: action.data,
    };
        default:
        return prevState;
    }
};

const initialState = {
  change1: 'text',
  change2: 100,
  change3: null,
};

const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있어요.
    console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('1st', store.getState());

const changechange1 = (data) => {
  return { // action
    type: 'CHANGE_TYPE1',
    data,
  };
};

const changechange2 = (data) => {
    return { // action
        type: 'CHANGE_TYPE2',
        data,
    };
};

const changechange3 = (data) => {
    return { // action
        type: 'CHANGE_TYPE3',
        data,
    };
};

// 기본 action 처리 방법
// store.dispatch({
//   type: 'CHANGE_TYPE1',
//   data: 'success',
// });

store.dispatch(changechange1('success'));
store.dispatch(changechange2(0));
store.dispatch(changechange3({object:'객체'}));

console.log('2nd', store.getState());