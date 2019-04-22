import React, { Component } from 'react';
import './styles/allStyles.scss';

class allUserOutput extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            stepsVisible: "hidden",
            stepsDisplayed: "none",
            stepsButtonText: "Show Steps",
            userInput: [],
            output: "",
            calculated: "visible",
            calculatedDisplayed: "flex",
        }
        this.toggleSteps = this.toggleSteps.bind(this)
    }

    toggleSteps() {
        if (this.state.stepsButtonText === "Show Steps") {
            this.setState({
                stepsVisible: "visible",
                stepsDisplayed: "inherit",
                stepsButtonText: "Hide Steps"
                
                
            });            
        }
        else {
            this.setState({
                stepsVisible: "hidden",
                stepsDisplayed: "none",
                stepsButtonText: "Show Steps"
                
            });       
        }
    }

    render() {
        return (
            <div 
                className = "allOuput" 
                style = {{

                    visibility : this.props.showStepsProp["calculated"], 
                    display: this.props.showStepsProp["calculatedDisplayed"], 
                    flexDirection: "column"
                }}>
                <h1 className = "OutputText" >{this.props.output}</h1>
                <button 
                    className = "stepsButton" 
                    onClick = {this.toggleSteps}>
                    {this.state.stepsButtonText}
                </button>
                
                <div 
                    className = "allSteps" 
                    style = {{
                        visibility : this.state.stepsVisible,
                        display: this.state.stepsDisplayed, 
                        flexDirection: "column"}}>
                    <h1 className = "stepsTitles formula">Formula</h1>
                    <p className = "stepsContent">{this.props.card["formula"]}</p>
                    <hr width="120%" color="grey" size="1" className = "divider"/>
                    <h1 className = "stepsTitles">Steps</h1>
                    <ol className = "stepsContent">
                        {this.props.card["steps"].map((currentStep) => { 
                            return (<li 
                                        key = {currentStep} 
                                        className = "stepsContent numberedSteps">
                                        {currentStep}
                                    </li>
                            )
                        })}    
                    </ol>                       
                    <hr 
                        width="120%" 
                        color="grey" 
                        size="1" 
                        className = "divider"/>
                    <h1 className = "stepsTitles">Answer</h1>
                    <p className = "stepsContent ">The Answer is {this.props.output}</p>
                </div>
            </div>
        );
    }
}

export default allUserOutput;