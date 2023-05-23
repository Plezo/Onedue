const { User, List, Todo } = require('../models');

const todos = [
    "Walk the dog", 
    "Grab groceries", 
    "Do taxes", 
    "Go to the gym"
]

const seedDB = async () => {
    const user = await User.create({
        username: "user1",
        password_hash: "abcd",
        email: "user1@gmail.com"
    });

    const list = await List.create({
        user_id: user.user_id,
        list_name: "List1"
    });

    todos.map(async (name) => {
        const todo = await Todo.create({
            list_id: list.list_id,
            user_id: user.user_id,
            name: name,
        });

        await todo.setUser(user);
        await todo.setList(list);
    })

    
    await list.setUser(user);
}

module.exports = seedDB;