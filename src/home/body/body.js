import React, { Component } from 'react'
import './body.css'

export default class body extends Component {
  render() {
    return (
      <div id="body">
        <div style={{ fontSize: "25px" }}>
          {/* <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
          <span><b> TO DO LIST </b></span> */}
          <p style={{ margin: "100px", marginLeft: "180px", fontSize: "40px" }}>
            <b>YOUR BUSY LIFE<br/> DESERVES THIS.</b>
            <p>Todolist is an award-winning app used by<br/> millions of people to stay organized and<br/> get more done.</p>
          </p>
        </div>
      </div>
    )
  }
}
