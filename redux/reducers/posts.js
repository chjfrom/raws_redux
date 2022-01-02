
const initialState = [];

const postReducer = (prevState = initialState, action) => {
    // 새로운 state 만들어주기 (불변성 유지)
    // prevState 이전값
    // action dispatch 후 전달된 값이 action에 들어감
    // ... 전개구문 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // 전개 연산자(Spread Operator)란 객체나 배열의 값을 하나 하나 넘기는 용도로 사용할 수 있다. 
    // console.log('prevState')
    // console.log(prevState)
    switch (action.type) {
    case 'ADD_POST':
        return [...prevState, action.data];
        // type 오타가 발생되면 default 조건문을 통과한다.
        default:
        return prevState;
    }
};

module.exports = postReducer;