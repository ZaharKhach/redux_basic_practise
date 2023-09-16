import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  </React.StrictMode>
);























/////////TEST//////////TEST////////TEST/////////TEST//////////TEST////////TEST/////////TEST//////////TEST////////TEST
// const initialState = {
//   value: 0
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INC':
//       return {
//         ...state,
//         value: state.value + 1
//       };
//     case 'DEC':
//       return {
//         ...state,
//         value: state.value - 1
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const inc = () => {
//   return {
//     type: 'INC'
//   };
// };

// const dec = () => {
//   return {
//     type: 'DEC'
//   };
// };

// const { incDispatch, decDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec
//   },
//   store.dispatch
// );

// store.subscribe(() => {
//   document.querySelector('.result').textContent = store.getState().value;
// });

// const Test = () => {
//   return (
//     <div>
//       <div className='result'></div>
//       <button className='btn btn-primary' onClick={incDispatch}>
//         INC
//       </button>
//       <button className='btn btn-primary' onClick={decDispatch}>
//         DEC
//       </button>
//     </div>
//   );
// };

// const root = document.getElementById('root');
// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <Test />
//     </React.StrictMode>
//   </Provider>,
//   root
// );


// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);


// document.querySelector('#inc').addEventListener('click', inc)

// document.querySelector('#dec').addEventListener('click', dec)

// document.querySelector('#rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 100);
//   rnd(value)
// })



