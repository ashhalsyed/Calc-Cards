import React, { Component } from 'react';
import './styles/allStyles.scss';


class Cards extends Component {  
  constructor() {
    super()
    this.state = {
      cardOpen: false,
    }
    this.cardClicked = this.cardClicked.bind(this)
  }
  
  cardClicked(cardClicked) {
    if (cardClicked.target.className ==="Card_image") {
      this.props.history.push("/"+cardClicked.target.id.replace(/\s/g, '_'))
    }
  }

  render() {
    return (
      <div>
        {this.props.renderedCards.map((currentCard) => {
          return (
            <div key= { currentCard["id"] } className = "Card" onClick={this.cardClicked}>
              <div className = "Card_Topbar"> 
                <button className = "Card_interact_item" >
                  <i className="fas fa-share" aria-hidden="True"></i>
                  {/* Visibility hidden in css */}
                </button>
                <h1 className = "Card_title" >{ currentCard["title"].replace(/_/g, " ") }</h1>
                <button className = "Card_interact_item" >
                  <i className="fas fa-save" aria-hidden="True"></i>
                  {/* Visibility hidden in css */}
                </button>
              </div>
                  <img
                    className = "Card_image" 
                    id = { currentCard["title"] }               
                    src = { currentCard["image"] }
                    alt="Card Preview"                    
                  />
                <div className = "Card_text" >
                  <p className = "Card_description">{ currentCard["description"] }</p>
                </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Cards;