import React, { Component } from "react";
import './styles/allStyles.scss'

class searchBar extends Component {
  constructor() {
    super();
    this.state = {
      boxSize: "3em",
      canType: "hidden",
      closeTransition: "closeIconClose 0.5s forwards ease-out",
      canClose: "auto",
      contentDisplayed: "none",
      userSearch: "",
      backgroundColor: "transparent",
      color: "white"
    };
    this.closeSearch = this.closeSearch.bind(this);
    this.SearchContent = this.SearchContent.bind(this)
    this.SearchBarClicked = this.SearchBarClicked.bind(this)
    this.textInput = React.createRef();
  }

  SearchBarClicked() {
    this.setState(state => ({
      boxSize: "75vw",
      closeTransition: "closeIconOpen 0.5s forwards ease-out",
      canClose: "pointer",
      backgroundColor: "white",
      color: "#223040"

    }));
    setTimeout(() => {
        this.setState({
          contentDisplayed: "inherit",
          canType: "visible",
      })
    }, 100);
    this.textInput.current.focus();
  }

  closeSearch() {
    this.setState(state => ({
      boxSize: "3em",
      canType: "hidden",
      closeTransition: "closeIconClose 0.5s forwards ease-out",
      canClose: "auto",
      contentDisplayed: "none",
      userSearch: "",
    }));
    setTimeout(() => {
        this.setState({
          backgroundColor: "transparent",
          color: "white"
      })
    }, 300);
    this.props.dataToFilter("")
  }

  SearchContent(searchText) {
    this.props.dataToFilter(searchText.target.value)
    this.setState({
        userSearch: searchText.target.value
    });
  }

  render() {
    return (
      <div 
        className="SearchBar" 
        style={{ 
          width: this.state.boxSize,
          backgroundColor: this.state.backgroundColor
        }}>
        <i
          onClick={this.closeSearch}
          className="fas fa-times"
          style={{
            display: this.state.contentDisplayed,
            animation: this.state.closeTransition,
            cursor: this.state.canClose
          }}
        />
        <input
          type="text"
          placeholder=""
          value={this.state.userSearch}
          className="SearchText"
          style={{ 
            display: this.state.contentDisplayed, 
            visibility: this.state.canType 
          }}
          ref={this.textInput}
          onChange={this.SearchContent}
        />
        <i
          className="fas fa-search"
          onClick={this.SearchBarClicked}
          style = {{color: this.state.color}}
        />
      </div>
    );
  }
}

export default searchBar;
