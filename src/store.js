import { createStore } from 'redux'

const initialState = {
    name: "Silvitko",
    age: 26,
    isSingle: false
}

// function name(state = "Silvitko", action) {
//     if (action.type === "CHANGE_INPUT") {
//         return action.value
//     }
//     return state
// }

// let store = createStore(name)

function profile(state = initialState, action) {
    if (action.type === "CHANGE_INPUT") {
        return {...state, name: action.value}
    }
    return state
}

let store = createStore(profile)

// function name(state="Zenny", action) {
//     switch(action.type) {
//         case 'CHANGE_INPUT':
//             return action.value
//         default:
//             return state
//     }
// }

export default store