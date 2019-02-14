import React, { Component } from 'react'

export default class board extends Component {
  render() {
    return (
      <div className="row" style={{marginTop: "6%", textAlign: "center"}}>
        <div className="col-md-2" style={{fontSize: "20px", paddingTop: "20px"}}>
            
            <i className="far fa-check-circle" style={{marginRight: "10px"}}></i>
            
            <b>MY LISTS</b>
            
        </div>
        <div className="col-md-10" style={{backgroundColor: "#dfe1e2",  paddingTop: "20px", height: "100%"}}>
            xyz
        </div>
      </div>
    )
  }
}
