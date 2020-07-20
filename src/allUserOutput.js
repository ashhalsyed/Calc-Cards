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

                    visibility : this.props.showStepsProp.calculated, 
                    display: this.props.showStepsProp.calculatedDisplayed, 
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
                    <h1 className = "stepsTitles formulaTitle">Formula</h1>
                    <p className = "stepsContent">{this.props.card.formula}</p>
                    <h1 className = "stepsTitles stepsTitle">Steps</h1>
                    <ol className = "stepsContent">
                        {this.props.card.steps.map((currentStep) => { 
                            return (<li 
                                        key = {currentStep} 
                                        className = "stepsContent numberedSteps">
                                        {(this.props.card.steps.indexOf(currentStep)+1).toString()+". "+currentStep}
                                    </li>
                            )
                        })}    
                    </ol>                       
                    <h1 className = "stepsTitles answerTitle">Answer</h1> 
                    <p className = "stepsContent answer">The Answer is {Math.round(this.props.output * 100) / 100}</p>
                </div>
            </div>
        );
    }
}

export default allUserOutput;