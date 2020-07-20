import React, { Component } from "react";
import "./styles/allStyles.scss";
import AllUserInput from "./allUserInput";
import AllUserOutput from "./allUserOutput";
import data from "./Card Data/data.json";
import allImages from "./Card Data/allImages.json";
import { CSSTransition } from "react-transition-group";

class cardContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentCard: {
				id: 0,
				title: "",
				description: "",
				image: "",
				inputs: [],
				bounds: [],
				steps: [],
				formula: ""
			},
			output: "",
			showStepsObject: {
				calculated: "hidden",
				calculatedDisplayed: "none"
			},
			imagePath: "./Card Data/Card Images/SAS Image.svg",
			fullCardClasses: "fullCard"
		};
		this.updateOutput = this.updateOutput.bind(this);
		this.showSteps = this.showSteps.bind(this);
		this.backClicked = this.backClicked.bind(this);
	}

	updateOutput(calculatedoutput) {
		this.setState({
			output: calculatedoutput
		});
	}

	showSteps(outputDisplayed) {
		if (outputDisplayed) {
			this.setState({
				showStepsObject: {
					calculated: "visible",
					calculatedDisplayed: "inherit"
				},
				fullCardClasses: "fullCard calculated"
			});
		} else {
			this.setState({
				showStepsObject: {
					calculated: "hidden",
					calculatedDisplayed: "none"
				},
				fullCardClasses: "fullCard"
			});
		}
	}

	hideSteps;

	backClicked() {
		this.props.history.goBack();
	}

	render() {
		const urlNoSlash = this.props.match.url.replace(/\//g, "");
		let requiredCard;
		for (let i = 0; i < data.cards.length; i++) {
			if (data.cards[i].title === urlNoSlash) {
				requiredCard = data.cards[i];
			}
		}

		const currentCardImage = allImages.images[requiredCard.image];
		return (
			<div className="cardContent">
				<div className="arrowHolder">
					<button className="arrowButton" onClick={this.backClicked}>
						<i className="fas fa-arrow-left" />
					</button>
				</div>

				<CSSTransition key={1} timeout={1000} classNames="myAnimation">
					<div className={this.state.fullCardClasses}>
						<h1 className="cardContentTitle">
							{requiredCard.title}
						</h1>
						<img
							className="cardContentImage"
							alt="Card content preview"
							src={currentCardImage}
						/>
						<AllUserInput
							card={requiredCard}
							output={this.updateOutput}
							outputDisplayed={this.showSteps}
						/>
						<AllUserOutput
							card={requiredCard}
							output={this.state.output}
							showStepsProp={this.state.showStepsObject}
						/>
					</div>
				</CSSTransition>
			</div>
		);
	}
}

export default cardContent;
