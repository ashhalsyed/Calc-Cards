import React, { Component } from "react";
import "./styles/allStyles.scss";
import { Link } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

class Cards extends Component {
	constructor() {
		super();
		this.state = {
			cardOpen: false,
			canSave: false,
			canRemove: false
		};
	}

	render() {
		let showSave = true;
		if (this.props.history.location.pathname === "/Saved_Cards") {
			showSave = false;
		}

		return (
			<div className="allCards">
				{this.props.renderedCards.map((currentCard, index) => {
					let cardDesription;
					if (currentCard.description.length >= 100) {
						cardDesription =
							currentCard.description.substring(0, 100) +
							" . . .";
					} else {
						cardDesription = currentCard.description;
					}

					const currentCardImage = this.props.allImages[
						currentCard.image
					];

					let CardTopbar;
					if (showSave) {
						CardTopbar = (
							<div className="Card_Topbar">
								<div className="invisibleIcon" />
								<h1 className="Card_title">
									{currentCard.title}
								</h1>
								<button
									className="Card_interact_item"
									onClick={this.props.saveCard}
									id={currentCard.title}
								>
									<i
										className="fas fa-save"
										aria-hidden="True"
										id={currentCard.title}
									/>
								</button>
							</div>
						);
					} else {
						CardTopbar = (
							<div className="Card_Topbar">
								<div className="invisibleIcon" />
								<h1 className="Card_title">
									{currentCard.title}
								</h1>
								<button
									className="Card_interact_item"
									onClick={this.props.removeCard}
									id={currentCard.title}
								>
									<i
										className="fas fa-trash"
										aria-hidden="True"
										id={currentCard.title}
									/>
								</button>
							</div>
						);
					}

					return (
						<div key={currentCard.id} className="Card">
							{CardTopbar}

							<Link
								className="CardimageHolder"
								to={{
									pathname: "/" + currentCard.title
								}}
							>
								<img
									id={currentCard.title}
									className="Card_image"
									src={currentCardImage}
									alt="Card Preview"
								/>
							</Link>

							<div className="Card_text">
								<p className="Card_description">
									{cardDesription}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Cards;
