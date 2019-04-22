import React, { Component } from 'react';
import HomeScreen from './homeScreen';
import CardContent from './cardContent';
import NoCard from './noCard'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/Calc_Cards">
            <Switch>
              <Route path = "/" component = {HomeScreen} exact/>
              <Route path = "/SAS" component = {CardContent}/>
              <Route path = "/SSS" component = {CardContent}/>
              <Route component = {NoCard}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;