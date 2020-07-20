import React, { Component } from "react";
import "./styles/allStyles.scss";
import allImages from "./Card Data/allImages.json";
import AllUserInput from "./allUserInput";
import AllUserOutput from "./allUserOutput";

class previewCard extends Component {
	constructor() {
		super();
		this.state = {
			showStepsObject: {
				calculated: "hidden",
				calculatedDisplayed: "none"
			},
			output: ""
		};
		this.makeACard = this.makeACard.bind(this);
		this.toggleSteps = this.toggleSteps.bind(this);
		this.updateOutput = this.updateOutput.bind(this);
		this.showSteps = this.showSteps.bind(this);
	}

	makeACard() {
		this.props.history.push("/Request_a_Card");
	}

	toggleSteps() {
		if (this.state.stepsButtonText === "Show Steps") {
			this.setState({
				stepsVisible: "visible",
				stepsDisplayed: "inherit",
				stepsButtonText: "Hide Steps"
			});
		} else {
			this.setState({
				stepsVisible: "hidden",
				stepsDisplayed: "none",
				stepsButtonText: "Show Steps"
			});
		}
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

	render() {
		let previewContent;
		let requiredCard = JSON.parse(localStorage.getItem("previewCard"));
		if (requiredCard === null) {
			// 	previewContent = (
			// 		<div className="previewCard">
			// 			<div className="nopreviewCard">
			// 				<h1 className="nopreviewCardTitle">
			// 					There is no card to preview
			// 				</h1>
			// 				<button
			// 					className="requestACard"
			// 					onClick={this.makeACard}
			// 				>
			// 					Request a Card
			// 				</button>
			// 			</div>
			// 		</div>

			requiredCard = {
				id: null,
				title: "",
				description: "",
				image: "",
				inputs: [],
				bounds: [],
				steps: [],
				formula: ""
			};
			let requiredCardImage = allImages.images[requiredCard.image];
			previewContent = (
				<div className="previewCard">
					<div className="arrowHolder">
						<button
							className="arrowButton"
							onClick={this.props.history.goBack}
						>
							<i className="fas fa-arrow-left" />
						</button>
					</div>
					<h1 className="PageTitle">Preview</h1>

					<h1 className="previewCardTitle">Closed</h1>
					<div className="Card">
						<div className="Card_Topbar">
							<div className="invisibleIcon" />
							<h1 className="Card_title">{requiredCard.title}</h1>
							<button className="Card_interact_item">
								<i className="fas fa-save" />
							</button>
						</div>

						<div className="CardimageHolder">
							<img
								className="Card_image"
								src={requiredCardImage}
								alt="Card Preview"
							/>
						</div>

						<div className="Card_text">
							<p className="Card_description">
								{requiredCard.description}
							</p>
						</div>
					</div>

					<h1 className="previewCardTitle">Open</h1>
					<div className="fullCard">
						<h1 className="cardContentTitle">
							{requiredCard.title}
						</h1>
						<img
							className="cardContentImage"
							alt="Card content preview"
							src={requiredCardImage}
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
				</div>
			);
		} else {
			let requiredCardImage = allImages.images[requiredCard.image];
			previewContent = (
				<div className="previewCard">
					<div className="arrowHolder">
						<button
							className="arrowButton"
							onClick={this.props.history.goBack}
						>
							<i className="fas fa-arrow-left" />
						</button>
					</div>
					<h1 className="PageTitle">Preview</h1>

					<h1 className="previewCardTitle">Closed</h1>
					<div className="Card">
						<div className="Card_Topbar">
							<div className="invisibleIcon" />
							<h1 className="Card_title">
								{requiredCard.title.replace(/_/g, " ")}
							</h1>
							<button className="Card_interact_item">
								<i className="fas fa-save" />
							</button>
						</div>

						<div className="CardimageHolder">
							<img
								className="Card_image"
								src={requiredCardImage}
								alt="Card Preview"
							/>
						</div>

						<div className="Card_text">
							<p className="Card_description">
								{requiredCard.description}
							</p>
						</div>
					</div>

					<h1 className="previewCardTitle">Open</h1>
					<div className="fullCard">
						<h1 className="cardContentTitle">
							{requiredCard.title}
						</h1>
						<img
							className="cardContentImage"
							alt="Card content preview"
							src={requiredCardImage}
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
				</div>
			);
		}
		console.log(previewContent);
		return <div>{previewContent}</div>;
	}
}

export default previewCard;
