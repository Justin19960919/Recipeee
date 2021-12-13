const data =[ {
    name: "Bob",
    userName: "bob123",
    type: "author",
},
    {name: "John",
    userName:"John456",
    type:"author"}
]


const follow = (state = data, action) => {
    switch (action.type) {
        case 'unfollow':
            return action.follow;
        default:
            return state;
    }
}

export default follow;