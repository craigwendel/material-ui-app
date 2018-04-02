import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import {Card, CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

export default class Form extends Component {
  render () {
    const cardStyle = {
      width: 1150,
      marginLeft: 80,
      marginTop: 10
    }
    const style = {
      height: 400,
      width: 1150,
      marginLeft: 80,
      marginTop: 10,
      padding: 25
    }
    const buttonStyle = {
      margin: 1,
      marginTop: 15,
      width: 150,
      height: 50
    }

    return (
      <div className='form'>
        <Paper zDepth={3} style={cardStyle}>
          <Card>
            <CardTitle title='Learn more' subtitle='Sign up below for updates!' />
          </Card>
        </Paper>
        <Paper zDepth={3} style={style}>
          <TextField hintText='First Name' floatingLabelText='First Name' fullWidth='true' />
          <TextField hintText='Last Name' floatingLabelText='Last Name' fullWidth='true' />
          <TextField hintText='Your Company Name' floatingLabelText='Company' fullWidth='true' />
          <TextField hintText='example@gmail.com' floatingLabelText='Email' fullWidth='true' />
          <RaisedButton label='Submit' primary='true' style={buttonStyle} />
        </Paper>
      </div>
    )
  }
}
