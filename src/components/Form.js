import React, {Component} from 'react'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

export default class Form extends Component {
  render () {
    const style = {
      height: 350,
      width: 1150,
      margin: 80,
      padding: 25
    }

    return (
      <div className='form'>
        <Paper zDepth={3} style={style}>
          <TextField hintText='First Name' floatingLabelText='First Name' />
          <Divider />
          <TextField hintText='Last Name' floatingLabelText='Last Name' />
          <Divider />
          <TextField hintText='example@gmail.com' floatingLabelText='Email' />
          <Divider />
          <TextField hintText='Must be 8 characters' floatingLabelText='Password' />
          <Divider />
        </Paper>
      </div>
    )
  }
}
