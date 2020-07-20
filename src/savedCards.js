import React, { Component } from "react";
import Cards from "./cards";
import allImages from "./Card Data/allImages.json";
import SearchBar from "./searchBar";

class savedCards extends Component {
	constructor() {
		super();

		let savedCardData = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).substring(0, 6) === "Card: ") {
				savedCardData.push(
					JSON.parse(localStorage.getItem(localStorage.key(i)))
				);
			}
		}

		this.state = {
			allSavedCards: savedCardData,
			savedImages: allImages.images
		};
		this.removeCard = this.removeCard.bind(this);
		this.updateCards = this.updateCards.bind(this);
	}

	updateCards(userSearch) {
		const filter = userSearch.toLowerCase();

		let savedCardData = [];
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i).substring(0, 6) === "Card: ") {
				savedCardData.push(
					JSON.parse(localStorage.getItem(localStorage.key(i)))
				);
			}
		}

		let renderedCards = savedCardData;

		if (userSearch !== "") {
			renderedCards = renderedCards.filter(currentCard => {
				const cardTitle = currentCard.title
					.toLowerCase()
					.replace(/_/g, " ");
				return cardTitle.includes(filter);
			});
		}

		this.setState({
			allSavedCards: renderedCards
		});
	}

	removeCard(specificCard) {
		const specificCardName = specificCard.target.id;

		if (
			window.confirm(
				'Are you sure you would like to delete "' +
					specificCardName +
					'"'
			)
		) {
			localStorage.removeItem("Card: " + specificCardName);

			let savedCardData = [];
			for (let i = 0; i < localStorage.length; i++) {
				if (localStorage.key(i).substring(0, 6) === "Card: ") {
					savedCardData.push(
						JSON.parse(localStorage.getItem(localStorage.key(i)))
					);
				}
			}

			this.setState({
				allSavedCards: savedCardData
			});
		}
	}

	render() {
		return (
			<div className="savedCards">
				<div className="arrowHolder">
					<button
						className="arrowButton"
						onClick={this.props.history.goBack}
					>
						<i class="fas fa-arrow-left" />
					</button>
				</div>
				<SearchBar dataToFilter={this.updateCards} />
				{/* <h1 className = "PageTitle">Saved Cards</h1> */}
				<Cards
					renderedCards={this.state.allSavedCards}
					history={this.props.history}
					allImages={this.state.savedImages}
					removeCard={this.removeCard}
				/>
			</div>
		);
	}
}

export default savedCards;
