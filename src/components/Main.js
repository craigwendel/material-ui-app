import React, {Component} from 'react'
import {CardTitle, CardMedia} from 'material-ui/Card'

export default class Main extends Component {
  render () {
    return (
      <div className='main'>
        <CardMedia overlay={<CardTitle title='Shop Securely Online' subtitle='Learn More' />}>
          <img src='https://wpvortex.com/wp-content/uploads/2015/02/HTTP-Headers.jpg' alt='' />
        </CardMedia>
      </div>
    )
  }
}
