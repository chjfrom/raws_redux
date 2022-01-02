//action 생성함수
  const addPost = (data) => {
      return { // action
          type: 'ADD_POST',
          data
      };
  };

  module.exports = {
      addPost
  }