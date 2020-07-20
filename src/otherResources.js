import React, { Component } from "react";
import data from "./Card Data/data.json";
import SearchBar from "./searchBar";

class otherResources extends Component {
	constructor() {
		super();
		this.state = {
			knownLinks: ["www.youtube.com"],
			currentResourceData: data.cards
		};
		this.resourceClicked = this.resourceClicked.bind(this);
		this.updateResources = this.updateResources.bind(this);
	}

	updateResources(userSearch) {
		const filter = userSearch.toLowerCase();
		let renderedResources = data.cards;

		if (userSearch !== "") {
			renderedResources = renderedResources.filter(currentResource => {
				const ResourceTitle = currentResource.title.toLowerCase();
				return ResourceTitle.includes(filter);
			});
		}

		this.setState({
			currentResourceData: renderedResources
		});
	}

	resourceClicked(resourceClicked) {
		console.log(resourceClicked.target.id);
		if (!(resourceClicked.target.className === "resourceTitle")) {
			this.props.history.push(
				"/Other_Resources/" + resourceClicked.target.id
			);
		}
	}

	render() {
		return (
			<div className="otherResources">
				<div className="arrowHolder">
					<button
						className="arrowButton"
						onClick={this.props.history.goBack}
					>
						<i class="fas fa-arrow-left" />
					</button>
				</div>
				{/* <h1 className = "PageTitle">Other Resources</h1> */}
				<SearchBar dataToFilter={this.updateResources} />
				<div className="allResources">
					{this.state.currentResourceData.map(currentResource => {
						return (
							<div
								className="resource"
								// onClick = {this.resourceClicked}
								id={currentResource.title}
							>
								<div
									className="TitleSection"
									id={currentResource.title}
								>
									<h1 className="resourceTitle">
										{currentResource.title}
									</h1>
								</div>
								<div
									className="ContentSection"
									id={currentResource.title}
									onClick={this.resourceClicked}
								>
									{Object.values(
										currentResource.resources
									).map(currentIndividualResource => {
										let displayedIcon;
										const currentURL = new window.URL(
											currentIndividualResource
										).host;

										if (
											this.state.knownLinks.includes(
												currentURL
											)
										) {
											if (
												currentURL === "www.youtube.com"
											) {
												displayedIcon = (
													<i
														class="fab fa-youtube"
														id={
															currentResource.title
														}
														onClick={
															this.resourceClicked
														}
													/>
												);
											}
										} else {
											displayedIcon = (
												<i
													class="fas fa-link"
													id={currentResource.title}
													onClick={
														this.resourceClicked
													}
												/>
											);
										}

										return (
											<div
												className="displayedIcons"
												id={currentResource.title}
												key={currentResource.id}
												onClick={this.resourceClicked}
											>
												{displayedIcon}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default otherResources;
