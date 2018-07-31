export const userProfileReducer = (state = {}, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
        {
            return state = {...state, name: action.payLoad};
        }
        case "CHANGE_AGE":
        {
            return state = {...state, age: action.payLoad};
        }
        case "CHANGE_INFO":
        {
            return state = {...state, name:  action.payLoad.name, age: action.payLoad.age};
        }
        default: return state;
    }
}