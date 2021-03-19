// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

  handleEvent(){
    console.log('Entering password...')
  }

  render(){
    return(
      <input onKeyUp={ this.handleEvent } type="password" />
    )
  }
}

export default Keypad