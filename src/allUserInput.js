import React, { Component } from "react";
import "./styles/allStyles.scss";

export class allUserInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: [],
			output: "",
			calculateButtonText: "Calculate",
			validInput: false,
			showClearButton: false,
			showUndoButton: false,
			savedInput: []
		};
		this.calculateInputs = this.calculateInputs.bind(this);
		this.updateInputData = this.updateInputData.bind(this);
		this.performCalculation = this.performCalculation.bind(this);
		this.validateInputBounds = this.validateInputBounds.bind(this);
		this.clearInput = this.clearInput.bind(this);
		this.undoClear = this.undoClear.bind(this);
		this.inputBox = React.createRef();
	}

	calculateInputs() {
		let newList = [];
		let i;
		for (i = 0; i < this.props.card.inputs.length; i++) {
			newList.push("");
		}
		return newList;
	}

	updateInputData(inputData) {
		if (this.state.showUndoButton) {
			this.setState({
				showUndoButton: false
			});
		}

		let newUserInput = this.state.userInput;
		if (this.state.userInput.length === 0) {
			const calculatedInputs = this.calculateInputs();
			newUserInput = calculatedInputs;
		}
		const inputBox = this.props.card.inputs.indexOf(inputData.target.name);

		newUserInput[inputBox] = inputData.target.value;

		let characterLimitExceeded;
		if (
			newUserInput[inputBox] >= 10 ** -20 &&
			newUserInput[inputBox] <= 10 ** 20
		) {
			characterLimitExceeded = false;
		} else {
			characterLimitExceeded = true;
		}

		if (!characterLimitExceeded) {
			this.setState({
				userInput: newUserInput
			});
		}

		if (!newUserInput.every(input => input === "")) {
			this.setState({
				showClearButton: true
			});
		} else {
			this.setState({
				showClearButton: false
			});
		}
	}

	validateInputBounds(inputData) {
		let valid = [];
		let i;
		for (i = 0; i < inputData.length; i++) {
			if (
				(this.props.card.bounds[i][0] === "none") |
				(inputData[i] >= this.props.card.bounds[i][0])
			) {
				valid.push(1);
			} else {
				valid.push(0);
			}
			if (
				(this.props.card.bounds[i][1] === "none") |
				(inputData[i] <= this.props.card.bounds[i][1])
			) {
				valid.push(1);
			} else {
				valid.push(0);
			}
		}
		return !valid.includes(0);
	}

	performCalculation() {
		let inputData;

		let blankInput = false;
		if (this.state.userInput.length === 0) {
			blankInput = true;
		}

		if (this.state.userInput.includes("") | blankInput) {
			inputData = "invalid";
		} else if (this.props.card.title === "SAS Cosine Law") {
			const a = Number(this.state.userInput[0]);
			const b = Number(this.state.userInput[1]);
			let C = Number(this.state.userInput[2]);

			this.setState({
				validInput: false
			});
			inputData = [a, b, C];

			if (this.validateInputBounds(inputData)) {
				const degreesToRadians = angle => (angle * Math.PI) / 180;
				C = degreesToRadians(Number(this.state.userInput[2]));
				const missingAngle =
					(a ** 2 + b ** 2 - 2 * a * b * Math.cos(C)) ** (1 / 2);

				this.setState({
					output: missingAngle,
					calculateButtonText: "Recalculate",
					validInput: true
				});
				this.props.output(missingAngle);
				this.props.outputDisplayed(true);
			} else {
				inputData = "invalid";
			}
		} else if (this.props.card.title === "SSS Cosine Law") {
			const a = Number(this.state.userInput[0]);
			const b = Number(this.state.userInput[1]);
			const c = Number(this.state.userInput[2]);

			this.setState({
				validInput: false
			});
			inputData = [a, b, c];

			if (this.validateInputBounds(inputData)) {
				let missingSide = Math.acos(
					(a ** 2 + b ** 2 - c ** 2) / (2 * a * b)
				);

				const radiansToDegrees = angle => (angle * 180) / Math.PI;
				missingSide = radiansToDegrees(missingSide);

				this.setState({
					output: missingSide,
					calculateButtonText: "Recalculate",
					validInput: true
				});
				this.props.output(missingSide);
				this.props.outputDisplayed(true);
			} else {
				inputData = "invalid";
			}
		} else if (this.props.card.title === "Slope With Two Points") {
			const x1 = Number(this.state.userInput[0]);
			const y1 = Number(this.state.userInput[1]);
			const x2 = Number(this.state.userInput[2]);
			const y2 = Number(this.state.userInput[3]);

			this.setState({
				validInput: false
			});
			inputData = [x1, y1, x2, y2];

			if (this.validateInputBounds(inputData)) {
				const calculatedSlope = (y2 - y1) / (x2 - x1);

				this.props.output(calculatedSlope);
				this.props.outputDisplayed(true);

				this.setState({
					output: calculatedSlope,
					calculateButtonText: "Recalculate",
					validInput: true
				});
			} else {
				inputData = "invalid";
			}
		} else {
			this.props.output("Preview");
			this.props.outputDisplayed(true);

			this.setState({
				output: "Preview",
				calculateButtonText: "Recalculate",
				validInput: true
			});
		}

		if (inputData === "invalid") {
			alert("Check your numbers and try again");
		}
	}

	clearInput() {
		const savedUserInput = this.state.userInput;
		this.setState({
			savedInput: savedUserInput
		});

		const newInput = this.calculateInputs();
		this.setState({
			userInput: newInput,
			showClearButton: false,
			calculateButtonText: "Calculate",
			showUndoButton: true
		});
		this.props.output(0);
		this.props.outputDisplayed(false);
	}

	undoClear() {
		this.setState({
			userInput: this.state.savedInput,
			showUndoButton: false,
			showClearButton: true
		});
	}

	render() {
		let clearButton = <div />;
		if (this.state.showClearButton) {
			clearButton = (
				<button className="clearButton" onClick={this.clearInput}>
					<i class="fas fa-backspace" />
				</button>
			);
		}

		let undoButton = <div />;
		if (this.state.showUndoButton) {
			undoButton = (
				<button className="undoButton" onClick={this.undoClear}>
					<i class="fas fa-undo" />
				</button>
			);
		}

		return (
			<div className="userInputwrapper">
				<div className="allUserInput">
					{this.props.card.inputs.map(currentInput => {
						return (
							<div key={currentInput} className="UserInput">
								<label className="inputLabel">
									{currentInput}
								</label>
								<input
									type="number"
									name={currentInput}
									className="inputBox"
									value={
										this.state.userInput[
											this.props.card.inputs.indexOf(
												currentInput
											)
										]
									}
									onChange={this.updateInputData}
								/>
							</div>
						);
					})}
				</div>
				<div className="inputButtons">
					<button
						className="calculateButton"
						onClick={this.performCalculation}
					>
						{this.state.calculateButtonText}
					</button>
					{clearButton}
					{undoButton}
				</div>
			</div>
		);
	}
}

export default allUserInput;
