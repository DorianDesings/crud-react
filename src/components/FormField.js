import React from 'react';

const FormField = (props) => (

    <div className="form__field">
        <label htmlFor={props.id}>{props.id}</label>
        <input type="text" id={props.id} className="content__text" />
    </div>
)

export default FormField