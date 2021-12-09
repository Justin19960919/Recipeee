const user ={
    name: "Alice",
    userName: "alice123",
    type: "user",


}

const profile = (state = user, action) => {
    switch (action.type) {
        case 'update-profile':
            return action.profile;
        case 'get-profile':
            return action.profile;
        default:
            return state;
    }
}

export default profile;