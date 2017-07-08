/**
 * Created by PC on 08-Jul-17.
 */
import React, { Component } from 'react'

export default class TextInput extends Component {
  render () {
    return (
      <div className="inputField">
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
          type='text'
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}/>
        <span className='error'>{this.props.error}</span>
      </div>
    )
  }
}
