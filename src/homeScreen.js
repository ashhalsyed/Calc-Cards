import React, { Component } from "react";
import Cards from "./cards";
import MenuBar from "./menuBar";
import SearchBar from "./searchBar";
import data from "./Card Data/data.json";
import allImages from "./Card Data/allImages.json";
// import * as firebase from "firebase";

class homeScreen extends Component {
	constructor() {
		super();
		this.state = {
			currentCardData: data.cards,
			userCardData: {}
		};
		this.updateCards = this.updateCards.bind(this);
		this.saveCard = this.saveCard.bind(this);
	}

	componentDidMount() {
		// const rootCardRef = firebase
		// 	.database()
		// 	.ref()
		// 	.child("submittedCards");
		// rootCardRef.on("value", snap => {
		// 	console.log(snap.val());
		// 	this.setState({
		// 		userCardData: snap.val()
		// 	});
		// });
	}

	updateCards(userSearch) {
		const filter = userSearch.toLowerCase();
		let renderedCards = data.cards;

		if (userSearch !== "") {
			renderedCards = renderedCards.filter(currentCard => {
				const cardTitle = currentCard.title
					.toLowerCase()
					.replace(/_/g, " ");
				return cardTitle.includes(filter);
			});
		}

		this.setState({
			currentCardData: renderedCards
		});
	}

	saveCard(specificCard) {
		const specificCardName = "Card: " + specificCard.target.id;

		if (localStorage.getItem(specificCardName) === null) {
			let savedCard;
			for (let i = 0; i < this.state.currentCardData.length; i++) {
				if (
					this.state.currentCardData[i].title ===
					specificCardName.replace("Card: ", "")
				) {
					savedCard = this.state.currentCardData[i];
				}
			}

			localStorage.setItem(specificCardName, JSON.stringify(savedCard));

			alert("Saved");
		} else {
			alert("This card is already saved");
		}
	}

	render() {
		// const rootCardRef = firebase
		// 	.database()
		// 	.ref()
		// 	.child("submittedCards");

		return (
			<div className="HomeScreen">
				<MenuBar />
				<SearchBar dataToFilter={this.updateCards} />
				{/* <p>Creator Cards</p> */}
				<Cards
					renderedCards={this.state.currentCardData}
					history={this.props.history}
					allImages={allImages.images}
					saveCard={this.saveCard}
				/>
				{/* <p>User Cards</p> */}
				{/* {rootCardRef.on("value", snap => {
					console.log("doing");
					console.log(
						<Cards
							renderedCards={Object.values(snap.val())}
							history={this.props.history}
							allImages={allImages.images}
							saveCard={this.saveCard}
						/>
					);
					return (
						<Cards
							renderedCards={Object.values(snap.val())}
							history={this.props.history}
							allImages={allImages.images}
							saveCard={this.saveCard}
						/>
					);
				})} */}
				{/* {[1, 2, 3].map(thing => {
					return (
						<div>
							<p>{thing}</p>
						</div>
					);
				})} */}
			</div>
		);
	}
}

export default homeScreen;
