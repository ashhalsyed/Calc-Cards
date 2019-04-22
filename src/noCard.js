import React, { Component } from 'react';
import './styles/allStyles.scss';

class NoCard extends Component {  
    constructor(props) {
        super(props)
        this.state = {

        }        
        this.goHome = this.goHome.bind(this)
    }

    goHome() {
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="noCard">
                <div className="noContent">
                    <h1 className = "noContentTitle">No Card Here</h1>
                    <button className = "noContentGoHome" onClick = {this.goHome}>Go Home</button>
                </div>
            </div>
        );
    }
}

export default NoCard;