import React, { Component } from 'react'

import loader from "../assets/loading.gif"

export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loading" />
      </div>
    )
  }
}
