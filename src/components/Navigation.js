import React, { Component } from 'react'

export default class Navigation extends Component {

  render() {
    return (
        <>
       <button className='btn btn-primary' style={{fontSize:"2rem", position:"fixed", left:"9px", height:"50px", width:"50px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", top:"50%", outline:"none", border:"none"}} disabled={this.props.page <= 1} onClick={this.props.handlePrevBtn}>	
       <i class="fa-solid fa-angle-left"></i>
       </button>
       <button className='btn btn-primary' style={{fontSize:"2rem", position:"fixed", right:"9px", height:"50px", width:"50px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", top:"50%", zIndex:"1", outline:"none", border:"none"}}  disabled={this.props.page  >= Math.ceil(this.props.totalResults / 8)} onClick={this.props.handleNextBtn}>	
       <i class="fa-solid fa-angle-right"></i>
       </button>
       </>
    )
  }
}