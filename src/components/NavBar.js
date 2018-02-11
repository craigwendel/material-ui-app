import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'

export default class NavBar extends Component {
  render () {
    return (
      <div className='nav-bar'>
        <Toolbar>
          <ToolbarGroup>
            <FlatButton label='Home' primary='true' />
            <FlatButton label='Products' />
            <FlatButton label='Team' />
            <FlatButton label='About Us' />
            <FlatButton label='Contact' />
            <ToolbarSeparator />
            <RaisedButton label='Request A Demo' primary='true' />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
