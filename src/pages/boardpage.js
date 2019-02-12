import React, { Component } from 'react'
import Board from '../home/body/board'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
export default class boardpage extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid " id="header">
                    <div className="row">
                        <div className="col-md-10"  >
                            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "30px" }}><b> TO DO LIST</b></Link>
                        </div>
                        <div className="col-md-2" style={{ fontSize: "30px" }}>
                            <Link to="/myBoard">
                                <i className="fas fa-user" style={{ marginLeft: "135px", fontSize: "35px", color: "white" }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Board />
                </div>
            </div>
        )
    }
}
