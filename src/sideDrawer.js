import React, { Component } from 'react';
import './styles/allStyles.scss'
import { Link } from 'react-router-dom'
import personalLogo from './assets/Logo Black.png'
import calcCardsLogo from './assets/calcCardsLogo.svg'


class sideDrawer extends Component {
  constructor() {
    super()
    this.state = {
      logoRotated: false
    }
    this.rotateLogo = this.rotateLogo.bind(this)
  }

  rotateLogo() {

    if (!this.state.logoRotated) {
      this.setState({
        logoRotated: true
      })

      setTimeout(() => {
        this.setState({
          logoRotated: false
        })
      }, 1500)
    }
  }

  render() {
    let sideBarClasses = "sideDrawer"
    if (this.props.display) {
      sideBarClasses = "sideDrawer open"
    }

    let logoClasses;
    if (this.state.logoRotated) (
      logoClasses = "personalLogo rotated"
    )
    else {
      logoClasses = "personalLogo"
    }

    return (
      <div className={sideBarClasses}>
        <div className="sideBarContent">
          <div className="sideBarHeader">
            <Link to={{ pathname: "/" }} onClick={this.props.toggle}>
              <img
                className="sideBarLogo"
                alt="side bar logo"
                src={calcCardsLogo}
              />
            </Link>
          </div>
          <div className="sideBarLinkHolder">
            <Link
              className="sideBarLink"
              to={{ pathname: "/Saved_Cards" }}
              onClick={this.props.toggle}
            >
              <i class="fas fa-square" />
              <h1 className="sideBarLinkText">Saved Cards</h1>
            </Link>

            <Link
              className="sideBarLink"
              to={{ pathname: "/Other_Resources" }}
              onClick={this.props.toggle}
            >
              <i class="fas fa-external-link-square-alt" />
              <h1 className="sideBarLinkText">Other Resources</h1>
            </Link>

            <Link
              className="sideBarLink"
              to={{ pathname: "/Request_a_Card" }}
              onClick={this.props.toggle}
            >
              <i class="fas fa-plus" />
              <h1 className="sideBarLinkText">Request a Card</h1>
            </Link>
          </div>
          <img className={logoClasses} src={personalLogo} alt="personal logo" onClick={this.rotateLogo} />
        </div>
      </div>
    );
  }
}

export default sideDrawer;