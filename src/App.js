import React, { Component } from 'react'
import Header from './components/Header'
import AllUsers from './components/AllUsers'
import NewUser from './components/NewUser'
// import PropTypes from 'prop-types'

class App extends Component {
  state = {
    users: [{
      id: 1,
      name: 'Dorian',
      surname: 'Designs',
      email: 'dorian@gmail.com'
    }]
  }
  render() {
    return (
      <div className="App" >
        <Header title='React CRUD' />
        <AllUsers users={this.state.users} />
        <NewUser />
      </div>
    );
  }
}

export default App;
