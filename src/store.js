import { createStore } from 'redux'

const initialState = {
    name: "Silvitko",
    age: 26,
    isSingle: "false",
    city: "Sydney",
    job: "IT",
    submitted: false
}

// function name(state = "Silvitko", action) {
//     if (action.type === "CHANGE_INPUT") {
//         return action.value
//     }
//     return state
// }

// let store = createStore(name)

function profile(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_INPUT": 
            return {...state, [action.field]: action.value}
        default:
            return state
    }
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