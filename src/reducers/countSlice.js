import {createSlice} from "@reduxjs/toolkit";


const countSlice = createSlice(
    //함수의 결과물을 담는다
    {
        // initialState 보관할 숫자
        name:'CountSlice',
        initialState:{num:100},
        reducers: {
            inc: (state, action) =>{
                console.log("inc")
                return {num: state.num+1}
            },
            dec: (state, action) =>{
                console.log("dec")
                return {num: state.num-1}
            },
        }
    }
)

export const {inc, dec} = countSlice.actions

export default countSlice.reducer