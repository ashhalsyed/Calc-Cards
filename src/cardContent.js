import React, { Component } from 'react';
import './styles/allStyles.scss';
import AllUserInput from './allUserInput';
import AllUserOutput from './allUserOutput';
import data from './Card Data/data.json';
// import currentImage from './Card Data/Card Images/SAS Image.svg'

class cardContent extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            currentCard: {
                "id": 0,
                "title": "",
                "description": "",
                "image": "",
                "inputs": [],
                "bounds": [],
                "steps": [],
                "formula": ""
            },
            output: "",
            showStepsObject: {
                calculated: "hidden",
                calculatedDisplayed: "none",
            },
            imagePath: "./Card Data/Card Images/SAS Image.svg"
        }
        this.updateOutput = this.updateOutput.bind(this)
        this.showSteps = this.showSteps.bind(this)
        this.backClicked = this.backClicked.bind(this)
        
    }
    
    componentDidMount() {
        const urlNoSlash = this.props.match.url.replace(/\//g, "")
        let requiredCard
        let i;
        for (i=0;i<data.cards.length;i++) {
            if (data.cards[i]["title"] === urlNoSlash) {
                requiredCard = data.cards[i]
            }
        }
        this.setState(state => ({
            currentCard: requiredCard,
            imagePath: "./Card Data/Card Images/"+requiredCard["image"]
        }))
    }

    updateOutput(calculatedoutput) {
        console.log("calculated output: ",calculatedoutput)
        this.setState({
            output: calculatedoutput,
        })
    }

    showSteps(outputDisplayed) {
        this.setState({
            showStepsObject: {
                calculated: outputDisplayed["calculated"],
                calculatedDisplayed: outputDisplayed["calculatedDisplayed"],
            }
        })        
    }

    backClicked() {
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="cardContent">
            <i class="fas fa-arrow-left" onClick = {this.backClicked}/>
                <div className="fullCard">
                    <h1>{this.state.currentCard["title"]}</h1>
                    <img 
                        className="cardContentImage" 
                        alt="Card content preview" 
                        src = {this.state.currentCard["image"]}
                    /> 
                    <AllUserInput card = {this.state.currentCard} output = {this.updateOutput} outputDisplayed = {this.showSteps}/>
                    <AllUserOutput card = {this.state.currentCard} output = {this.state.output} showStepsProp = {this.state.showStepsObject}/>
                </div>
            </div>
        );
    }
}

export default cardContent;