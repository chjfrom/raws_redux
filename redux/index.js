const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { addPost } = require('./actions/post')
const { login, logOut } = require('./actions/user')


// store 초기값
const initialState = {
  user: null,
  posts: [],
};

const middleWare = (store)=> (dispatch) => (action)=> {
    console.log('dispatch 전 로깅', action);
    // dispatch 전 기능
    dispatch(action);
    // dispatch 후 기능
} 

const thunkMiddleWare = (store)=> (dispatch) => (action)=> {
    if (typeof action === 'function') { // 비동기 처리시 함수로 전달
        return action(store.dispatch,store.getState);
    }
   return dispatch(action);
} 

const enhancer = applyMiddleware(
    middleWare,
    thunkMiddleWare,
  );

// function applyMiddleware (store){
//     // 실행되는 시점 마다 다른 코드 작성가능
//     return function (next){
//          // 실행되는 시점 마다 다른 코드 작성가능
//         return function (action){
//              // 실행되는 시점 마다 다른 코드 작성가능
//         }
//     }
// }

// store 생성
// 첫 인자로 reducer, 두번째 인자로 store 초기값 전달
const store = createStore(reducer, initialState, enhancer);

// store.subscribe(() => { // react-redux 안에 들어있어요.
//     // console.log('changed'); // 화면 바꿔주는 코드 여기서
// });

console.log('getState', store.getState());




// dispatch 전달
store.dispatch(login({
    id:1,
    name: 'hcjfrom',
    admin: true
}));


// console.log('login', store.getState());

// store.dispatch(addPost({
//     userId:1,
//     id:1,
//     contents: '리덕스 연습하기',
// }));

// console.log('addPost', store.getState());

// store.dispatch(logOut());

// console.log('logOut', store.getState());

