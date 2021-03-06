const { createStore } = require('redux');

const reducer = (prevState, action) => {
    // 새로운 state 만들어주기 (불변성 유지)
    // prevState 이전값
    // action dispatch 후 전달된 값이 action에 들어가 음
    // ... 전개구문 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // 전개 연산자(Spread Operator)란 객체나 배열의 값을 하나 하나 넘기는 용도로 사용할 수 있다. 
    // console.log('prevState')
    // console.log(prevState)
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
        //  type 오타가 발생되면 default 조건문을 통과한다.
        default:
        return prevState;
    }
};

// store 초기값
const initialState = {
  change1: 'text',
  change2: 100,
  change3: null,
};

// store 생성
// 첫 인자로 reducer, 두번째 인자로 store 초기값 전달
const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있어요.
    // console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('1 콘솔값', store.getState());

//action 생성함수
const changechange1 = (data) => {
  return { // action
    type: 'CHANGE_TYPE1',
    data,
  };



  
};
//action 생성함수
const changechange2 = (data) => {
    return { // action
        type: 'CHANGE_TYPE2',
        data,
    };
};
//action 생성함수
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

// dispatch 전달
store.dispatch(changechange1('success'));
store.dispatch(changechange2(0));
store.dispatch(changechange3({object:'객체'}));

console.log('2 콘솔값', store.getState());