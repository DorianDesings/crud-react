import React, { Component } from 'react';
import FormField from './FormField';

const stateInitial = {
    user: {
        name: '',
        surname: '',
        email: '',

    },
    error: false,
    buttonIcon: 'plus'
}
class NewUser extends Component {
    state = { ...stateInitial }
    render() {
        // const { error } = this.state
        return (
            <>
                <div className="top-bar">
                    <h1 className="top-bar__title">New User</h1>
                </div>
                <form className=" form content__user content__user--user-info">
                    <FormField id="name" />
                    <FormField id="surname" />
                    <FormField id="email" />
                    <button
                        id="add-user"
                        className="button button--green"
                    >
                        Add User
                        <i className={`fas fa-${this.state.buttonIcon}`}></i>
                    </button>
                </form>
            </>
        )

    }
}

export default NewUser