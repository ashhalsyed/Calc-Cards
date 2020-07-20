import React, { Component } from "react";
import HomeScreen from "./homeScreen";
import CardContent from "./cardContent";
import SavedCards from "./savedCards";
import OtherResources from "./otherResources";
import RequestACard from "./requestACard";
import OtherResourceContent from "./otherResourcesContent";
import NoCard from "./noCard";
import PreviewCard from "./previewCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import data from "./Card Data/data.json";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
	render() {
		let allCardNames = [];
		data.cards.forEach(card => {
			allCardNames.push(card.title);
		});

		return (
			<div className="App">
				<BrowserRouter basename="/Calc-Cards">
					<Route
						render={({ location }) => (
							<TransitionGroup>
								<CSSTransition
									key={location.pathname}
									timeout={300}
									classNames="myAnimation"
								>
									<Switch>
										<Route
											path="/"
											component={HomeScreen}
											exact
										/>
										<Route
											path="/Saved_Cards"
											component={SavedCards}
											exact
										/>
										<Route
											path="/Other_Resources"
											component={OtherResources}
											exact
										/>
										<Route
											path="/Request_a_Card"
											component={RequestACard}
											exact
										/>

										{allCardNames.map(cardName => {
											return (
												<Route
													key={cardName}
													path={"/" + cardName}
													component={CardContent}
													exact
												/>
											);
										})}

										{allCardNames.map(cardName => {
											return (
												<Route
													key={cardName}
													path={
														"/Other_Resources/" +
														cardName
													}
													component={
														OtherResourceContent
													}
													exact
												/>
											);
										})}

										<Route
											path="/Request_a_Card/Preview"
											component={PreviewCard}
											exact
										/>

										<Route component={NoCard} />
									</Switch>
								</CSSTransition>
							</TransitionGroup>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
