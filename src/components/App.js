import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
  // debugger
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

module.exports = App
