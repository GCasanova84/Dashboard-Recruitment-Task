const url = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';

export const getUsers = () => {

    return async (dispatch) => {
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return dispatch(loadUsers(data));
            });
    };

}

export const loadUsers = (users) => ({
    type: 'GET_USERS',
    payload: {
        users
    }
})

export const editUser = (user) => {

    return async (dispatch) => {
        await fetch(url + '/' + user.id, {
            method: 'PUT',
            body: JSON.stringify({
                ...user
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return dispatch(updateUser(data));
            });
    };

}

export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: {
        user
    }
})

export const deleteUser = (id) => {

    return async (dispatch) => {
        await fetch(url + '/' + id, {
            method: 'DELETE',
        })
            .then(() => {
                return dispatch(removeUser(id));
            });
    };

}

export const removeUser = (id) => ({
    type: 'DELETE_USER',
    payload: {
        id
    }
})

export const addUser = (user) => {

    return async (dispatch) => {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                ...user
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                return dispatch(createUser(data));
            });
    };

}

export const createUser = (user) => ({
    type: 'CREATE_USER',
    payload: {
        user
    }
})