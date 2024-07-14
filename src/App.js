import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
    <>
        <Navbar/>
        <div className='container my-4'>
            <h1>Hey, it's just baked for u!!</h1>
            <News/>
        </div>
    </>
    )
  }
}
