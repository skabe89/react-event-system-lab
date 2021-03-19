// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {

  handleBlur = e => {
      console.log('Hey! Eyes on me!')
  }

  handleFocus = e => {
      console.log('Good!')
  }

  render(){
    return (
      <button onBlur={ this.handleBlur } onFocus={ this.handleFocus }> button </button>
    )
  }

}

export default EyesOnMe
