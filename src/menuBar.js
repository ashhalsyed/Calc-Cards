import React, { Component } from "react";
import SideDrawer from "./sideDrawer";
import "./styles/allStyles.scss";

class menuBar extends Component {
	constructor() {
		super();
		this.state = {
			sideBarOpen: false
		};
		this.toggleSideBar = this.toggleSideBar.bind(this);
		this.closeSideBar = this.closeSideBar.bind(this);
	}

	toggleSideBar() {
		this.setState({
			sideBarOpen: !this.state.sideBarOpen
		});
	}

	closeSideBar() {
		this.setState({
			sideBarOpen: false
		});
	}

	render() {
		let backdrop;
		if (this.state.sideBarOpen) {
			backdrop = (
				<div
					className="backDrop"
					onClick={this.closeSideBar}
					onmousedown={this.closeSideBar}
				/>
			);
		}
		return (
			<div className="sideBarHolder">
				<div className="menuBar">
					<i class="fas fa-bars" onClick={this.toggleSideBar} />
				</div>
				<SideDrawer
					display={this.state.sideBarOpen}
					toggle={this.toggleSideBar}
				/>
				{backdrop}
			</div>
		);
	}
}

export default menuBar;
