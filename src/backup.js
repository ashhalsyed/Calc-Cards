import React, { Component } from 'react';
import './styles/allStyles.scss';

class cardContent extends Component {  
    constructor() {
        super()
            this.state = {
                title: "My Title",
                image: "My Image",
                inputs: ["Side a", "Side b", "Angle C"],
                bounds: [[0,"none"],[0,"none"],[0,180]],
                formula: "c = (a^2 + b^2 -2ab cosC)^(1/2)",
                steps: ["Substitude side 'a', side 'b', and angle 'C' into given general equation for SAS", "Simplify"],
                userInput: [],
                output: "",
                calculated: "hidden",
                calculatedDisplayed: "none",
                calculateButtonText: "Calculate",
                stepsVisible: "hidden",
                stepsDisplayed: "none",
                stepsButtonText: "Show Steps",
                validInput: false
            }
        this.updateInputData = this.updateInputData.bind(this)
        this.hardcodedSAS = this.hardcodedSAS.bind(this)
        this.toggleSteps = this.toggleSteps.bind(this)
        this.validateInputBounds = this.validateInputBounds.bind(this)
        this.inputBox = React.createRef();
    }

    componentDidMount() {
        this.calculateInputs()
    }

    calculateInputs() {
        let i;
        for (i = 0; i < this.state.inputs.length; i++) { 
            this.state.userInput.push("")
        }
    }

    updateInputData(inputData) {
        const inputBox = this.state.inputs.indexOf(inputData.target.name);
        const newUserInput = this.state.userInput;

        newUserInput[inputBox] = inputData.target.value

        this.setState({
            userInput: newUserInput
        });
    }

    validateInputBounds(inputData) {
        console.log(inputData)
        let valid = []
        
        let i;
        for (i = 0; i < inputData.length; i++) { 
            if (this.state.bounds[i][0] === "none" | inputData[i] >= this.state.bounds[i][0]) {
                valid.push(1)
            }
            else {
                valid.push(0)
            }
            if (this.state.bounds[i][1] === "none" | inputData[i] <= this.state.bounds[i][1]) {
                valid.push(1)
            }
            else {
                valid.push(0)
            }
        }
        console.log(valid)
        return !valid.includes(0) 
    }

    hardcodedSAS() {
        const a = Number(this.state.userInput[0]);
        const b = Number(this.state.userInput[1]);
        let C = Number(this.state.userInput[2]);

        this.setState({
            validInput: false
        })
        const inputData = [a,b,C];

        if (this.validateInputBounds(inputData)) {
            const degreesToRadians = (angle) => angle * Math.PI / 180;
            C = degreesToRadians(Number(this.state.userInput[2]));
            const missingAngle = ((a**2)+(b**2)-(2*a*b*Math.cos(C)))**(1/2);
            
            this.setState({
                output: missingAngle,
                calculated: "visible",
                calculatedDisplayed: "inherit",
                calculateButtonText: "Recalculate",
                validInput: true
            });            
        }
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
        <div className="cardContent">
            <div className="fullCard">
                <h1>{this.state.title}</h1>
                <img 
                    className="cardContentImage" 
                    alt="Card content preview" 
                    source = {this.state.image}
                /> 

                <div className = "allUserInput">
                    {this.state.inputs.map((currentInput) => {
                        return (
                            <div key = {currentInput} className = "UserInput">
                                <label className = "inputLabel">{currentInput}</label>
                                <input 
                                    type = "number" 
                                    name = {currentInput}
                                    className = "inputBox"
                                    value = {this.state.userInput[this.state.inputs.indexOf(currentInput)]}
                                    onChange = {this.updateInputData}
                                />
                            </div>

                        )
                    })}
                </div>
                <button 
                    className = "calculateButton" 
                    onClick = {this.hardcodedSAS}>
                    {this.state.calculateButtonText}
                </button>
                <p>{this.state.validInput.toString()}</p>
                <div 
                    className = "allOuput" 
                    style = {{
                        visibility : this.state.calculated, 
                        display: this.state.calculatedDisplayed, 
                        flexDirection: "column"
                    }}>
                    <h1 className = "OutputText" >{this.state.output}</h1>
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
                        <h1 className = "stepsTitles">Formula</h1>
                        <p className = "stepsContent">{this.state.formula}</p>
                        <hr width="120%" color="grey" size="1" className = "divider"/>
                        <h1 className = "stepsTitles">Steps</h1>
                        <ol className = "stepsContent">
                            {this.state.steps.map((currentStep) => { 
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
                        <p className = "stepsContent ">The Answer is {this.state.output}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default cardContent;