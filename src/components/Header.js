import React from 'react'

const Header = (props) => (
    <header>
        <h1 className="title">
            {props.title}
        </h1>
    </header>
)

export default Header