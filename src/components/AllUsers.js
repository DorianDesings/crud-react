import React from 'react';
import User from './User'

const AllUsers = ({ users, deleteUser }) => {
    //message to know if there are users or not
    const message = Object.keys(users).length === 0 ? 'No users' : 'Manage your users'

    return (
        <>
            <div className="top-bar">
                <h1 className="top-bar__title">All Users</h1>
            </div>
            <div className="content__header">
                <p className="content__text content__text--header">Name</p>
                <p className="content__text content__text--header">Surname</p>
                <p className="content__text content__text--header">Email</p>
            </div>

            <div className="content__users">
                {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        </>
    )
}

export default AllUsers