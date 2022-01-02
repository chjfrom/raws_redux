const { createStore } = require('redux');

const reducer = (prevState, action) => {
    // 새로운 state 만들어주기 (불변성 유지)
    // prevState 이전값
    // action dispatch 후 전달된 값이 action에 들어감
    // ... 전개구문 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // 전개 연산자(Spread Operator)란 객체나 배열의 값을 하나 하나 넘기는 용도로 사용할 수 있다. 
    // console.log('prevState')
    // console.log(prevState)
    switch (action.type) {
        case 'LOG_IN':
        return {
        ...prevState,
        user: action.data,
    };
        case 'LOG_OUT':
        return {
        ...prevState,
        user: null,
    };
    case 'ADD_POST':
        return {
        ...prevState,
        posts: [...prevState.posts, action.data],
    };
        // type 오타가 발생되면 default 조건문을 통과한다.
        default:
        return prevState;
    }
};

// store 초기값
const initialState = {
  user: null,
  posts: [],
};

// store 생성
// 첫 인자로 reducer, 두번째 인자로 store 초기값 전달
const store = createStore(reducer, initialState);

store.subscribe(() => { // react-redux 안에 들어있어요.
    // console.log('changed'); // 화면 바꿔주는 코드 여기서
});

console.log('getState', store.getState());

//action 생성함수
const login = (data) => {
  return { // action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
    return { // action
        type: 'LOG_OUT',
    };
};

const addPost = (data) => {
    return { // action
        type: 'ADD_POST',
        data
    };
};


// dispatch 전달
store.dispatch(login({
    id:1,
    name: 'hcjfrom',
    admin: true
}));


console.log('login', store.getState());

store.dispatch(addPost({
    userId:1,
    id:1,
    contents: '리덕스 연습하기',
}));

console.log('addPost', store.getState());

store.dispatch(logOut());

console.log('logOut', store.getState());

