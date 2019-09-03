
// import * as actionTypes from "../actionKeys/actionTypes";

// export const add = val => {
//     return {
//       type: actionTypes.ADD,
//       addResult: val
//     };
//   };
  
//   export const subtract = val => {
//     return {
//       type: actionTypes.SUBTRACT,
//       subtractResult: val
//     };
//   };

import { INCREMENT, DECREASE } from "../actionKeys/actionTypes";

export function incrementAction() {
    return {
      type: INCREMENT,
    };
  }
export function decreaseAction() {
  return{
    type: DECREASE,
  };
}
