import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './NavBar'
import Main from './Main'
import Form from './Form'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MuiThemeProvider>
          <NavBar />
          <Main />
          <Form />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
