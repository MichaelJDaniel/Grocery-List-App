import React, { Component } from 'react';
import List from "./List";
import './App.css';
import ThingForm from "./ThingForm"

class App extends Component {
  state = {
    things: [
      { id: 1, name: "Milk", complete: true, },
      { id: 2, name: "Cheese", complete:false, },
      { id: 3, name: "Chicken", complete: false, }
    ]
   };

   getUniqId = () => {
     return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1)
   }
   
   addItem = (name) => {
     const {things, } = this.state;
     const thing = { name, id: this.getUniqId, complete: false, }
     this.setState({ things: [thing, ...things] })
   }

   handleClick = (id) => {
     const { things } = this.state
     this.setState({
       things: things.map( thing => {
         if (thing.id === id) {
           return {
           ...thing,
           complete: !thing.complete
         }
        }
        return thing

       })
     })
  }
  
  render() {
    return (
      <div>
        <ThingForm addItem={this.addItem} />
          <List name="Grocery List" items={this.state.things} thingClick={this.handleClick} />
      </div>
      );

  }

}
     

export default App;
