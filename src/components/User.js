import React from 'react'

const User = ({ user }) => (
    <div className="content__user">
        <p className="content__text">{user.name}</p>
        <p className="content__text">{user.surname}</p>
        <p className="content__text">{user.email}</p>
        <button className="button button--green">
            Edit
            <i className="fas fa-pen"></i>
        </button>
        <button className="button button--delete">
            Delete
            <i className="fas fa-trash"></i>
        </button>
    </div>
)

export default User