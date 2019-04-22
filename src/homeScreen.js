import React, { Component } from 'react';
import Cards from './cards';
import SearchBar from './searchBar';
import data from './Card Data/data.json';

class homeScreen extends Component {  
  constructor() {
    super()
    this.state = {
      currentCardData: data.cards
    }
    this.updateCards = this.updateCards.bind(this)
  }

  componentDidMount() {
  }
  

  updateCards(userSearch) {
    const filter = userSearch.toLowerCase();;
    let renderedCards = data.cards;
  
    if (userSearch !== "") {
      renderedCards = renderedCards.filter(currentCard => {
        const cardTitle = currentCard["title"].toLowerCase().replace(/_/g, " ");
        return cardTitle.includes(filter);
      });
    } 

    this.setState({
      currentCardData: renderedCards
    });
  }


  render() {
    return (
      <div className="HomeScreen">
        <SearchBar dataToFilter = {this.updateCards}/>
        <Cards renderedCards = {this.state.currentCardData} history = {this.props.history}/>
      </div>
    );
  }
}

export default homeScreen;