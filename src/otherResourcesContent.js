import React, { Component } from "react";
import data from "./Card Data/data.json";
import "./styles/allStyles.scss";

class otherResourcesContent extends Component {
	constructor() {
		super();
		this.state = {
			knownLinks: ["www.youtube.com"]
		};
	}

	render() {
		const urlNoSlash = this.props.match.url
			.replace(/\//g, "")
			.replace("Other_Resources", "");
		let requiredCard;
		let i;
		for (i = 0; i < data.cards.length; i++) {
			if (data.cards[i].title === urlNoSlash) {
				requiredCard = data.cards[i];
			}
		}

		return (
			<div className="otherResourcesContent">
				<div className="arrowHolder">
					<button
						className="arrowButton"
						onClick={this.props.history.goBack}
					>
						<i class="fas fa-arrow-left" />
					</button>
				</div>
				<div className="resourceContent">
					<h1 className="resourceContentTitle">
						{requiredCard.title}
					</h1>

					{Object.keys(requiredCard.resources).map(
						currentResource => {
							let displayedResourceContent;
							const currentURL = new window.URL(
								requiredCard.resources[currentResource]
							).host;
							if (this.state.knownLinks.includes(currentURL)) {
								if (currentURL === "www.youtube.com") {
									displayedResourceContent = (
										<div className="youtubeEmbedVideo">
											<h1 className="specificResourceTitle">
												{currentResource}
											</h1>
											<iframe
												title={currentURL}
												width="220"
												height="200"
												src={
													"https://www.youtube-nocookie.com/embed/" +
													requiredCard.resources[
														currentResource
													].replace(
														"https://www.youtube.com/watch?v=",
														""
													)
												}
												frameborder="0"
												allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
											/>
										</div>
									);
								}
							} else {
								displayedResourceContent = (
									<div className="resourceLinkHolder">
										<a
											className="resourceLink"
											href={
												requiredCard.resources[
													currentResource
												]
											}
											target="_blank"
											rel="noopener noreferrer"
										>
											{currentResource}
											<i class="fas fa-external-link-alt" />
										</a>
									</div>
								);
							}

							return displayedResourceContent;
						}
					)}
				</div>
			</div>
		);
	}
}

export default otherResourcesContent;
