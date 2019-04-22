import React, { Component } from 'react';
import './styles/allStyles.scss';

export class allUserInput extends Component {
  constructor(props) {
        super(props)
        this.state = {
            userInput: [],
            output: "",
            calculateButtonText: "Calculate",
            validInput: false,
        }
        this.updateInputData = this.updateInputData.bind(this)
        this.performCalculation = this.performCalculation.bind(this)
        this.validateInputBounds = this.validateInputBounds.bind(this)
        this.inputBox = React.createRef();
    }

    componentDidMount() {
        this.calculateInputs()
    }

    calculateInputs() {
        let newList = []
        let i;
        for (i = 0; i < this.props.card["inputs"].length; i++) { 
            newList.push("")
        }
        this.setState ({
            userInput: newList
        })
    }

    updateInputData(inputData) {
        const inputBox = this.props.card["inputs"].indexOf(inputData.target.name);
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
            if (this.props.card["bounds"][i][0] === "none" | inputData[i] >= this.props.card["bounds"][i][0]) {
                valid.push(1)
            }
            else {
                valid.push(0)
            }
            if (this.props.card["bounds"][i][1] === "none" | inputData[i] <= this.props.card["bounds"][i][1]) {
                valid.push(1)
            }
            else {
                valid.push(0)
            }
        }
        console.log(valid)
        return !valid.includes(0) 
    }

    performCalculation() {
        console.log(this.props.card["title"])
        if (this.props.card["title"] === "SAS") {
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
                    calculateButtonText: "Recalculate",
                    validInput: true
                });
                this.props.output(missingAngle)
                this.props.outputDisplayed({
                    calculated: "visible",
                    calculatedDisplayed: "inherit",                    
                })            
            }   
            else {
                alert("Check your numbers and try again")
            }     
        }

        if (this.props.card["title"] === "SSS") {
            const a = Number(this.state.userInput[0]);
            const b = Number(this.state.userInput[1]);
            const c = Number(this.state.userInput[2]);

            this.setState({
                validInput: false
            })
            const inputData = [a,b,c];

            if (this.validateInputBounds(inputData)) {
                let missingSide = Math.acos((a**2+b**2-c**2)/(2*a*b));
                
                const radiansToDegrees = (angle) => angle * 180 / Math.PI;
                missingSide = radiansToDegrees(missingSide);          

                this.setState({
                    output: missingSide,
                    calculateButtonText: "Recalculate",
                    validInput: true
                });
                this.props.output(missingSide)
                this.props.outputDisplayed({
                    calculated: "visible",
                    calculatedDisplayed: "inherit",                    
                })            
            }
            else {
                alert("Check your numbers and try again")
            }    
        }
    } 
  
  render() {
    return (
        <div className = "userInputwrapper">
            <div className = "allUserInput">
                {this.props.card["inputs"].map((currentInput) => {
                    return (
                        <div key = {currentInput} className = "UserInput">
                            <label className = "inputLabel">{currentInput}</label>
                            <input 
                                type = "number" 
                                name = {currentInput}
                                className = "inputBox"
                                value = {this.state.userInput[this.props.card["inputs"].indexOf(currentInput)]}
                                onChange = {this.updateInputData}
                            />
                        </div>
                    )
                })}
            </div>
            <button 
                className = "calculateButton" 
                onClick = {this.performCalculation}>
                {this.state.calculateButtonText}
            </button>
            {/* <p>{this.state.validInput.toString()}</p> */}
        </div>
    )
  }
}

export default allUserInput;
