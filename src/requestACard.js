import React, { Component } from "react";
import "./styles/allStyles.scss";
import allImages from "./Card Data/allImages.json";
import firebase from "firebase";

import circleSVG from './Card Data/Card Images/circle.svg'
import cubeSVG from './Card Data/Card Images/cube.svg'
import cylinderSVG from './Card Data/Card Images/cylinder.svg'
import lineSVG from './Card Data/Card Images/line.svg'
import noImageSVG from './Card Data/Card Images/noImage.svg'
import rectangleSVG from './Card Data/Card Images/rectangle.svg'
import sphereSVG from './Card Data/Card Images/sphere.svg'
import squareSVG from './Card Data/Card Images/square.svg'
import triangleSVG from './Card Data/Card Images/triangle.svg'

class requestACard extends Component {
	constructor() {
		super();
		if (localStorage.getItem("previewCard") === null) {
			this.state = {
				inputBoxData: [],
				inputBoxes: [],
				stepsData: [],
				steps: [],
				previewTitle: "",
				previewDescription: "",
				imagePicked: "",
				previewFormula: ""
			};
		} else {
			let requiredCard = JSON.parse(localStorage.getItem("previewCard"));
			this.state = {
				inputBoxData: [],
				inputBoxes: [],
				stepsData: [],
				steps: [],
				previewTitle: requiredCard.title,
				previewDescription: requiredCard.description,
				imagePicked: requiredCard.image,
				previewFormula: requiredCard.formula
			};
		}

		// const initialInputBox = (
		// 	<div>
		// 		<input
		// 			className="inputBox"
		// 			name={0}
		// 			type="text"
		// 			placeholder="Input Name"
		// 			value={this.state.inputBoxData[0]}
		// 			onChange={this.updateInputBoxData}
		// 		/>
		// 	</div>
		// );
		// this.state = {
		// 	inputBoxData: [],
		// 	inputBoxes: [],
		// 	stepsData: [],
		// 	steps: [],
		// 	previewTitle: "",
		// 	previewDescription: "",
		// 	imagePicked: "",
		// 	previewFormula: ""
		// };
		this.updateTitle = this.updateTitle.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.updateImage = this.updateImage.bind(this);
		this.addInputBox = this.addInputBox.bind(this);
		this.updateInputBoxData = this.updateInputBoxData.bind(this);
		this.removeInput = this.removeInput.bind(this);
		this.updateFormula = this.updateFormula.bind(this);
		this.addStep = this.addStep.bind(this);
		this.updateStepsData = this.updateStepsData.bind(this);
		this.removeSteps = this.removeSteps.bind(this);
		this.previewCard = this.previewCard.bind(this);
		this.submitCard = this.submitCard.bind(this);
	}

	componentDidMount() {
		const rootIDRef = firebase
			.database()
			.ref()
			.child("currentUniqueID");

		rootIDRef.on("value", snap => {
			this.setState({
				currentID: snap.val() + 1
			});
		});

		const rootCardRef = firebase
			.database()
			.ref()
			.child("submittedCards");

		rootCardRef.on("value", snap => {
			this.setState({
				allCardData: snap.val()
			});
		});
	}

	updateTitle(titleInput) {
		let newText = titleInput.target.value;
		this.setState({
			previewTitle: newText
		});
	}

	updateDescription(DescriptionInput) {
		let newDescription = DescriptionInput.target.value;
		this.setState({
			previewDescription: newDescription
		});
	}

	updateImage(dropDownInput) {
		let newImage = dropDownInput.target.value;
		this.setState({
			imagePicked: newImage
		});
	}

	addInputBox() {
		let allinputBoxes = this.state.inputBoxes;
		let allInputBoxData = this.state.inputBoxData;
		allinputBoxes.push(
			<div className="specificInputBoxHolder">
				<div className="iconPlaceHolder" />
				<input
					className="inputBox"
					name={allinputBoxes.length}
					type="text"
					placeholder="Input Name"
					value={this.state.inputBoxData[allinputBoxes.length]}
					onChange={this.updateInputBoxData}
				/>
				<i
					id={allinputBoxes.length}
					className="fas fa-times"
					onClick={this.removeInput}
				/>
			</div>
		);

		allInputBoxData.push("");

		this.setState({
			inputBoxes: allinputBoxes,
			inputBoxData: allInputBoxData
		});
	}

	updateInputBoxData(specificInputBoxData) {
		let newInputBoxData = this.state.inputBoxData;
		const inputBoxNumber = specificInputBoxData.target.name;
		newInputBoxData[inputBoxNumber] = specificInputBoxData.target.value;

		this.setState({
			inputBoxData: newInputBoxData
		});
	}

	addStep() {
		let allsteps = this.state.steps;
		let allStepsData = this.state.stepsData;
		allsteps.push(
			<div className="specificStepHolder">
				<div className="iconPlaceHolder" />
				<input
					className="step"
					name={allsteps.length}
					type="text"
					placeholder="Step"
					value={this.state.stepsData[allsteps.length]}
					onChange={this.updateStepsData}
				/>
				<i
					id={allsteps.length}
					className="fas fa-times"
					onClick={this.removeSteps}
				/>
			</div>
		);

		allStepsData.push("");

		this.setState({
			steps: allsteps,
			stepsData: allStepsData
		});
	}

	updateStepsData(specificStepData) {
		let newStepsData = this.state.stepsData;
		const stepNumber = specificStepData.target.name;
		newStepsData[stepNumber] = specificStepData.target.value;

		this.setState({
			stepsData: newStepsData
		});
	}

	removeInput(specificInputBox) {
		const removedInputBox = specificInputBox.target.id;

		let newInputBoxes = this.state.inputBoxes;
		delete newInputBoxes[removedInputBox];

		let newinputBoxData = this.state.inputBoxData;
		delete newinputBoxData[removedInputBox];

		this.setState({
			inputBoxData: newinputBoxData
		});
	}

	removeSteps(specificStep) {
		const removedSteps = specificStep.target.id;

		let newSteps = this.state.steps;
		delete newSteps[removedSteps];

		let newStepsData = this.state.stepsData;
		delete newStepsData[removedSteps];

		this.setState({
			steps: newSteps,
			stepsData: newStepsData
		});
	}

	updateFormula(formulaInput) {
		let newFormula = formulaInput.target.value;
		this.setState({
			previewFormula: newFormula
		});
	}

	submitCard() {
		let bounds = [];
		for (let i = 0; i < this.state.inputBoxes.length; i++) {
			bounds.push(["none", "none"]);
		}

		const newcurrentID = this.state.currentID;

		const rootIDRef = firebase
			.database()
			.ref()
			.child("currentUniqueID");
		rootIDRef.set(newcurrentID);

		const submittedCard = {
			id: newcurrentID,
			title: this.state.previewTitle,
			description: this.state.previewDescription,
			image: this.state.imagePicked,
			inputs: this.state.inputBoxData,
			bounds: bounds,
			steps: this.state.stepsData,
			formula: this.state.previewFormula
		};

		if (submittedCard.title !== "") {
			let newCardData = this.state.allCardData;
			newCardData[submittedCard.id] = submittedCard;

			const rootCardRef = firebase
				.database()
				.ref()
				.child("submittedCards");
			rootCardRef.set(newCardData);

			alert("Your card has been submitted!");
		} else {
			alert("A title is required");
		}
	}

	previewCard() {
		let bounds = [];
		for (let i = 0; i < this.state.inputBoxes.length; i++) {
			bounds.push(["none", "none"]);
		}

		const requiredCard = {
			id: null,
			title: this.state.previewTitle,
			description: this.state.previewDescription,
			image: this.state.imagePicked,
			inputs: this.state.inputBoxData,
			bounds: bounds,
			steps: this.state.stepsData,
			formula: this.state.previewFormula
		};
		localStorage.setItem("previewCard", JSON.stringify(requiredCard));
		this.props.history.push("/Request_a_Card/Preview");
	}

	render() {
		// console.log(this.state.currentID);
		// console.log(this.state.allCardData);

		let currentCardImage = this.state.imagePicked

		if (currentCardImage === "circle") {
			currentCardImage = circleSVG
		}
		if (currentCardImage === "cube") {
			currentCardImage = cubeSVG
		}
		if (currentCardImage === "cylinder") {
			currentCardImage = cylinderSVG
		}
		if (currentCardImage === "line") {
			currentCardImage = lineSVG
		}
		if (currentCardImage === "") {
			currentCardImage = noImageSVG
		}
		if (currentCardImage === "rectangle") {
			currentCardImage = rectangleSVG
		}
		if (currentCardImage === "sphere") {
			currentCardImage = sphereSVG
		}
		if (currentCardImage === "square") {
			currentCardImage = squareSVG
		}
		if (currentCardImage === "triangle") {
			currentCardImage = triangleSVG
		}

		return (
			<div className="requestACard">
				<div className="arrowHolder">
					<button
						className="arrowButton"
						onClick={this.props.history.goBack}
					>
						<i className="fas fa-arrow-left" />
					</button>
				</div>
				<h1 className="PageTitle">Request a Card</h1>

				<button className="previewButton" onClick={this.previewCard}>
					<i className="fas fa-eye" />
				</button>

				<div className="requestCard">
					<input
						className="titleInput"
						type="text"
						placeholder="Title"
						value={this.state.previewTitle}
						onChange={this.updateTitle}
					/>
					<img
						className="previewImage"
						// src={allImages.images[this.state.imagePicked]}
						src={currentCardImage}
						alt={"preview of card"}
					/>
					<select
						className="dropDownHolder"
						value={this.state.imagePicked}
						onChange={this.updateImage}
					>
						{Object.keys(allImages.images).map(currentImage => {
							if (currentImage === "") {
								return (
									<option key={currentImage} value="">
										No Image
									</option>
								);
							} else {
								return (
									<option
										key={currentImage}
										value={currentImage}
									>
										{currentImage.charAt(0).toUpperCase() +
											currentImage.slice(1)}
									</option>
								);
							}
						})}
					</select>
					<input
						className="descriptionInput"
						type="text"
						placeholder="Description"
						value={this.state.previewDescription}
						onChange={this.updateDescription}
					/>

					<div className="allInputBoxHolder">
						{this.state.inputBoxes.map(currentBox => {
							return currentBox;
						})}
						<button
							className="addInputButton"
							onClick={this.addInputBox}
						>
							<i className="fas fa-plus" />
							<p className="addInputText">Add an input</p>
						</button>
					</div>

					<input
						className="formulaInput"
						type="text"
						placeholder="Formula"
						value={this.state.previewformula}
						onChange={this.updateFormula}
					/>

					<div className="allStepsHolder">
						{this.state.steps.map(currentstep => {
							return currentstep;
						})}
						<button
							className="addStepsButton"
							onClick={this.addStep}
						>
							<i className="fas fa-plus" />
							<p className="addStepText">Add a step</p>
						</button>
					</div>
				</div>

				<button className="SubmitCardButton" onClick={this.submitCard}>
					<p className="SubmitCardText">Submit Card</p>
					<i className="fas fa-paper-plane" />
				</button>
			</div>
		);
	}
}

export default requestACard;
